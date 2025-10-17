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
    sns.histplot(df['engajamento_total'], bins=10)
    plt.title('Distribuição do Engajamento dos Posts')
    plt.xlabel('Curtidas + Comentários')
    plt.ylabel('Quantidade de Posts')
    plt.show()
