import { FastifyReply, FastifyRequest } from 'fastify';

import { createAccountService, authenticateAccountService, updateAccountService, findAccountIdByEmailService } from '../services/account.service';
import { registerAccountSchema, authenticateAccountSchema, updateAccountSchema } from './schemas/account.schema';


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
    const { email_Account } = req.body as { email_Account: string };

    const accountId = await findAccountIdByEmailService({ email_Account });

    return reply.status(200).send({ accountId });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return reply.status(400).send({ error: message });
  }
}

export async function updateAccountController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id_Account } = request.params as { id_Account: number };
    const id_AccountNumber = Number(id_Account);
    const data = updateAccountSchema.parse(request.body);

    const account = await updateAccountService({ id_Account: id_AccountNumber, ...data });

    return reply.status(201).send(account);
  } catch (error) {
    return reply.status(400).send({
      error: 'Erro de validação',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      details: error,
    });
  }
};