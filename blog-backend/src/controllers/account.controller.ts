import Fastify, { FastifyReply, FastifyRequest } from 'fastify';

const fastify = Fastify();
import { createAccountService, authenticateAccountService, updateAccountService, deleteAccountService } from '../services/account.service';
import { createAccountSchema, authenticateAccountSchema, updateAccountSchema } from '../schemas/account.schema';



export async function registerAccountController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = createAccountSchema.parse(request.body);

    const account = await createAccountService(data);

    return reply.status(201).send(account);
  } catch (error) {
    return reply.status(400).send({ error: 'Erro de validação', details: error });
  }
};

export async function loginAccountController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = authenticateAccountSchema.parse(request.body);

    const token = await authenticateAccountService(data);

    return reply.status(200).send({ token });
  } catch (error) {
    return reply.status(400).send({ error: 'Erro de validação', details: error });
  }
};

export async function updateAccountController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id_Account } = request.params as { id_Account: string };
    const data = updateAccountSchema.parse(request.body);

    const account = await updateAccountService({ 
      id_Account: Number(id_Account),
       ...data,
      });

    return reply.status(200).send(account);
  } catch (error) {
    return reply.status(400).send({ error: 'Erro de validação', details: error });
  }
};

export async function deleteAccountController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id_Account } = request.params as { id_Account: string };

    await deleteAccountService(Number(id_Account));

    return reply.status(200).send({ message: 'Conta deletada com sucesso' });
  } catch (error) {
    return reply.status(400).send({ error: 'Erro ao deletar conta', details: error });
  }
}
