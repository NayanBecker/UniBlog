import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

query = """
SELECT p."id_Post",
       COALESCE(COUNT(DISTINCT c."id_Curtida"), 0) AS total_curtidas,
       COALESCE(COUNT(DISTINCT co."id_Comentario"), 0) AS total_comentarios
FROM "T_Post" p
LEFT JOIN "T_PostInteracaoCapa" pic ON p."id_Post" = pic."id_Post_PIC"
LEFT JOIN "T_PIC_Curtidas" c ON pic."id_PIC" = c."id_PIC_Curtida"
LEFT JOIN "T_PIC_Comentarios" co ON pic."id_PIC" = co."id_PIC_Comentario"
GROUP BY p."id_Post"
ORDER BY (COUNT(DISTINCT c."id_Curtida") + COUNT(DISTINCT co."id_Comentario")) DESC;
"""


def grafico_engajamento_post(conn):
    df = pd.read_sql(query, conn)
    df['engajamento_total'] = df['total_curtidas'] + df['total_comentarios']
    ax = plt.subplot()
    ax.set_facecolor('#E8F0F2')
    ax.set_ylabel('Quantidade de Posts', fontsize=12)
    ax.set_xlabel('Curtidas + Comentários', fontsize=12)
    plt.title('Distribuição do Engajamento dos Posts')
    sns.histplot(df['engajamento_total'], bins=20, kde=False,  ax=ax, color='tab:red')
    media = df['engajamento_total'].mean()
    mediana = df['engajamento_total'].median()
    plt.axvline(media, color='blue', linestyle='--', label=f'Média: {media:.2f}')
    plt.axvline(mediana, color='orange', linestyle='--', label=f'Mediana: {mediana:.1f}')
    plt.legend()
    plt.show()
