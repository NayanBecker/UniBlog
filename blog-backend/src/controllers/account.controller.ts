import { FastifyReply, FastifyRequest } from 'fastify';

import { createAccountService, authenticateAccountService, updateAccountService, findAccountIdByEmailService } from '../services/accountService';
import { registerAccountSchema, authenticateAccountSchema, updateAccountSchema, recoverAccountSchema } from './schemas/account.schema';

export async function registerAccountController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = registerAccountSchema.parse(request.body);

    const account = await createAccountService(data);

    return reply.status(201).send(account);
  } catch (error) {
    return reply.status(400).send({
      error: 'Erro de validação',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      details: error,
    });
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

export async function recoverAccountController(req: FastifyRequest, reply: FastifyReply) {
  try {
    const data = recoverAccountSchema.parse(req.body);

    const accountId = await findAccountIdByEmailService(data);

    return reply.status(200).send({ accountId });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return reply.status(400).send({ error: message });
  }
}

export async function updateAccountController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = updateAccountSchema.parse(request.body);
    const { id_Account } = request.params as { id_Account: number };
    const id_AccountNum = Number(id_Account);

    const account = await updateAccountService({ id_Account: id_AccountNum, ...data });

    return reply.status(201).send(account);
  } catch (error) {
    return reply.status(400).send({
      error: 'Erro de validação',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      details: error,
    });
  }
};