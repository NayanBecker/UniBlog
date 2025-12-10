import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt


query = """
SELECT pf."semestre_Perfil", COUNT(p."id_Post") AS total_posts
FROM "T_Post" p
JOIN "T_Perfil" pf ON p."id_Perfil_Post" = pf."id_Perfil"
WHERE pf."semestre_Perfil" IS NOT NULL
GROUP BY pf."semestre_Perfil"
ORDER BY pf."semestre_Perfil";
"""

def grafico_posts_por_semestre(conn):
    df = pd.read_sql(query, conn)
    sns.barplot(x='semestre_Perfil', y='total_posts', data=df)
    plt.title('Atividade dos Alunos por Semestre')
    plt.xlabel('Semestre')
    plt.ylabel('Total de Posts')
    plt.show()
