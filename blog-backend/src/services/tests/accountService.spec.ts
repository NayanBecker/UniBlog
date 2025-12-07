import { hash } from 'bcryptjs';
import { CreateAccountDataInterface, createAccountService } from '../accountService';

jest.mock('../../lib/prisma', () => ({
    t_Account: {
        create: jest.fn(),
    },
}));

jest.mock('bcryptjs', () => ({
    hash: jest.fn(),
}));

import db from '../../lib/prisma';

describe('Criar Conta', () => {
    const mockCreateAccountData: CreateAccountDataInterface = {
        nome_Account: 'Teste',
        email_Account: 'teste@example.com',
        matricula_Account: '123456',
        password_Account: 'senha123',
        confirmPassword_Account: 'senha123',
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('deve lançar erro se as senhas não coincidirem', async () => {
        const invalidData = { ...mockCreateAccountData, confirmPassword_Account: 'outraSenha' };

        await expect(createAccountService(invalidData))
            .rejects
            .toThrow('As senhas não coincidem.');
    });


    it('deve criar uma conta com os dados corretos', async () => {
        (hash as jest.Mock).mockResolvedValue('hashedPassword123');
        const fakeCreated = { id_Account: 1, email_Account: mockCreateAccountData.email_Account };
        (db.t_Account.create as jest.Mock).mockResolvedValue(fakeCreated);

        const result = await createAccountService(mockCreateAccountData);

        expect(db.t_Account.create).toHaveBeenCalledWith({
            data: {
                nome_Account: mockCreateAccountData.nome_Account,
                email_Account: mockCreateAccountData.email_Account,
                password_Account: 'hashedPassword123',
                matricula_Account: mockCreateAccountData.matricula_Account,
            },
        });

        expect(result).toEqual(fakeCreated);
    });
});