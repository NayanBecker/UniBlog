from connection import get_connection
from queries.perfil_Tipo import grafico_perfis_tipo
from queries.engajamento_post import grafico_engajamento_post
from queries.posts_por_mes import grafico_posts_por_mes
from queries.posts_por_semestre import grafico_posts_por_semestre
from queries.engajamento_por_tipo import grafico_engajamento_por_tipo
from queries.posts_por_curso import grafico_posts_por_curso



def main():
    conn = get_connection()
    if not conn:
        return

    print("✅ Conectado ao banco de dados!")


    grafico_perfis_tipo(conn)
    grafico_posts_por_curso(conn)
    grafico_engajamento_post(conn)
    grafico_posts_por_mes(conn)
    grafico_posts_por_semestre(conn)
    grafico_engajamento_por_tipo(conn)

    conn.close()

if __name__ == "__main__":
    main()
