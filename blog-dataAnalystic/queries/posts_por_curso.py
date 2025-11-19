import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

query = """
SELECT c."nome_Curso", COUNT(p."id_Post") AS total_posts
FROM "T_Post" p
JOIN "T_Perfil" pf ON p."id_Perfil_Post" = pf."id_Perfil"
JOIN "T_Curso" c ON pf."id_Curso_Perfil" = c."id_Curso"
GROUP BY c."nome_Curso"
ORDER BY total_posts DESC;
"""

def grafico_posts_por_curso(conn):
    df = pd.read_sql(query, conn)
    sns.barplot(x='total_posts', y='nome_Curso', data=df)
    plt.title('Posts por Curso')
    plt.xlabel('Total de Posts')
    plt.ylabel('Curso')
    plt.show()
