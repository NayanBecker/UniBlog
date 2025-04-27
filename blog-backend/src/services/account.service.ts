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


export async function createAccountService({ nome_Account, email_Account, password_Account, confirmPassword_Account, matricula_Account }: CreateAccountDataInterface) {
  if (password_Account !== confirmPassword_Account) {
    throw new Error('As senhas não coincidem.');
  }
  const hashedPassword = await hash(password_Account, 8);

  const createdAccount = await db.t_Account.create({
    data: {
      nome_Account: nome_Account,
      email_Account: email_Account,
      password_Account: hashedPassword,
      matricula_Account: matricula_Account
    },
  });

  return createdAccount;
}

export async function updateAccountService({ id_Account, nome_Account, email_Account, password_Account }: UpdateAccountDataInterface) {

  const dataToUpdate: any = {};

  if (nome_Account) dataToUpdate.nome_Account = nome_Account;
  if (email_Account) dataToUpdate.email_Account = email_Account;
  if (password_Account) {
    dataToUpdate.password_Account = await hash(password_Account, 8);
  }

  const account = await db.t_Account.update({
    where: { id_Account },
    data: dataToUpdate,
  });

  return {
    id: account.id_Account,
    name: account.nome_Account,
    email: account.email_Account,
  };
}




export async function authenticateAccountService({ email_Account, password_Account, }: AuthAccountDataInterface) {
  const account = await db.t_Account.findUnique({
    where: { email_Account },
  });

  if (!account || !(await compare(password_Account, account.password_Account))) {
    throw new Error('Credenciais inválidas');
  }

  const token = app.jwt.sign(
    { id: account.id_Account, name: account.nome_Account },
    { expiresIn: '7d' }
  );

  return token;
}
