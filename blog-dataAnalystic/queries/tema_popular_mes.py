import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

query = """
SELECT 
  TO_CHAR(TO_DATE(mes, 'YYYY-MM'), 'Month') AS mes_nome,
  STRING_AGG(INITCAP(tema), ', ') AS top5
FROM (
  SELECT 
    TO_CHAR("createdAt_Post", 'YYYY-MM') AS mes,
    LOWER(TRIM("title_Post")) AS tema,
    COUNT(*) AS quantidade,
    ROW_NUMBER() OVER (PARTITION BY TO_CHAR("createdAt_Post", 'YYYY-MM') ORDER BY COUNT(*) DESC) AS posicao
  FROM "T_Post"
  WHERE "title_Post" IS NOT NULL
  GROUP BY mes, tema
) AS ranked
WHERE posicao <= 5
GROUP BY mes
ORDER BY mes DESC;
"""

def grafico_tema_popular_mes(conn):
    df = pd.read_sql(query, conn)

    # Limpeza e ordenação dos meses
    df['mes_nome'] = df['mes_nome'].str.strip().str.capitalize()
    df = df.sort_values(by='mes_nome', ascending=True)

    # Cria a figura
    plt.figure(figsize=(12, 6))
    sns.set(style="whitegrid")

    # Plotar barras horizontais “decorativas”
    sns.barplot(
        data=df,
        y="mes_nome",
        x=[len(x.split(',')) for x in df["top5"]],  # número de temas (só para dar o comprimento da barra)
        color="#6CC4A1",
        alpha=0.4
    )

    # Adicionar texto com os temas ao lado das barras
    for index, row in df.iterrows():
        plt.text(
            x=0.05, 
            y=index, 
            s=row["top5"], 
            fontsize=10, 
            va='center', 
            ha='left', 
            color="#333"
        )

    plt.title("Top 5 Temas Mais Comentados por Mês", fontsize=14, weight='bold')
    plt.xlabel('')
    plt.ylabel('Mês')
    plt.xticks([])
    plt.tight_layout()
    plt.show()
