import { FastifyInstance } from 'fastify';
import { curtirController, descurtirController, comentarController, deletarComentarioController, getInteracoesController } from '../controllers/interacoes.controller';

export async function interacoesRoutes(app: FastifyInstance) {
    app.post('/',
        curtirController
    );
    app.delete('/',
        descurtirController
    );
    app.post('/comentario',
        comentarController
    );
    app.delete('/comentario',
        deletarComentarioController
    );
    app.get('/',
        getInteracoesController
    );
}
