import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

query = """
SELECT
    pf."tipo_Perfil",
    AVG(COALESCE(curtidas, 0) + COALESCE(comentarios, 0)) AS engajamento_medio
FROM (
    SELECT p."id_Perfil_Post",
           COUNT(DISTINCT c."id_Curtida") AS curtidas,
           COUNT(DISTINCT co."id_Comentario") AS comentarios
    FROM "T_Post" p
    LEFT JOIN "T_PostInteracaoCapa" pic ON p."id_Post" = pic."id_Post_PIC"
    LEFT JOIN "T_PIC_Curtidas" c ON pic."id_PIC" = c."id_PIC_Curtida"
    LEFT JOIN "T_PIC_Comentarios" co ON pic."id_PIC" = co."id_PIC_Comentario"
    GROUP BY p."id_Post"
) eng
JOIN "T_Perfil" pf ON eng."id_Perfil_Post" = pf."id_Perfil"
GROUP BY pf."tipo_Perfil";
"""
def grafico_engajamento_por_tipo(conn):
    df = pd.read_sql(query, conn)
    sns.barplot(x='tipo_Perfil', y='engajamento_medio', data=df)
    plt.title('Engajamento Médio por Tipo de Perfil')
    plt.xlabel('Tipo de Perfil')
    plt.ylabel('Engajamento Médio')
    plt.show()