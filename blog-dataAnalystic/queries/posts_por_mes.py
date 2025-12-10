import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

query = """
SELECT
    DATE_TRUNC('month', "createdAt_Post") AS mes,
    COUNT(*) AS total_posts
FROM "T_Post"
GROUP BY mes
ORDER BY mes;
"""

def grafico_posts_por_mes(conn):
    df = pd.read_sql(query, conn)
    df['mes'] = pd.to_datetime(df['mes'])
    sns.lineplot(x='mes', y='total_posts', data=df, marker='o')
    plt.title('Evolução Temporal — Posts por Mês')
    plt.xlabel('Mês')
    plt.ylabel('Total de Posts')
    plt.xticks(rotation=45)
    plt.show()
