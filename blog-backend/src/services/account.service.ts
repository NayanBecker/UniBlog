import { hash, compare } from 'bcryptjs';
import { PrismaClient } from '../generated/prisma';
import { app } from '../app';

const db = new PrismaClient();
export interface CreateAccountDataInterface {
  nome_Account: string;
  email_Account: string;
  matricula_Account: string;
  password_Account: string;
  confirmPassword_Account: string;
}
export interface UpdateAccountDataInterface {
  id_Account: number;
  nome_Account?: string;
  email_Account?: string;
  password_Account?: string;
}
export interface AuthAccountDataInterface {
  email_Account: string;
  password_Account: string;
}
export interface RecoverAccountDataInterface {
  email_Account: string;
}


export async function createAccountService(data: CreateAccountDataInterface) {
  if (data.password_Account !== data.confirmPassword_Account) {
    throw new Error('As senhas não coincidem.');
  }
  const SALT_ROUNDS = 8;
  const hashedPassword = await hash(data.password_Account, SALT_ROUNDS);

  const createdAccount = await db.t_Account.create({
    data: {
      nome_Account: data.nome_Account,
      email_Account: data.email_Account,
      password_Account: hashedPassword,
      matricula_Account: data.matricula_Account
    },
  });

  return createdAccount;
}

export async function updateAccountService(data: UpdateAccountDataInterface) {
  const getAccount = await db.t_Account.findFirst({
    where: { id_Account: data.id_Account },
  });

  if (!getAccount) {
    throw new Error('Conta não encontrada');
  }

  if (data.password_Account) {
    const SALT_ROUNDS = 8;
    const hashedPassword = await hash(data.password_Account, SALT_ROUNDS);
    data.password_Account = hashedPassword;
  }
  const updatedAccount = await db.t_Account.update({

    where: { id_Account: data.id_Account },
    data: {
      nome_Account: data.nome_Account,
      email_Account: data.email_Account,
      password_Account: data.password_Account,
    },
  });
  if (!updatedAccount) {
    throw new Error('Erro ao atualizar a conta');
  }
  return updatedAccount;

}


export async function deleteAccountService({ id_Account }: { id_Account: number }) {
  const deletedAccount = await db.t_Account.delete({
    where: { id_Account },
  });

  return deletedAccount;
}



export async function authenticateAccountService({ email_Account, password_Account, }: AuthAccountDataInterface) {
  const account = await db.t_Account.findUnique({
    where: { email_Account },
  });

  if (!account || !(await compare(password_Account, account.password_Account))) {
    throw new Error('Credenciais inválidas');
  }

  const token = app.jwt.sign(
    { id_Account: account.id_Account },
    { expiresIn: '7d' }
  );

  return token;
}

export async function findAccountIdByEmailService({ email_Account }: RecoverAccountDataInterface) {
  const findAccountIdByEmail = await db.t_Account.findUnique({
    where: { email_Account },
    select: { id_Account: true },
  });
  if (!findAccountIdByEmail) {
    throw new Error('E-mail não encontrado');
  }

  return findAccountIdByEmail;
}