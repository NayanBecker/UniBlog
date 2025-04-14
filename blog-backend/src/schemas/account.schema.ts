export const registerAccountSchema = {
  body: {
    type: 'object',
    required: ['nome_Account', 'email_Account', 'matricula_Account', 'password_Account'],
    properties: {
      nome_Account: { type: 'string', maxlength: 100 },
      email_Account: { type: 'string', format: 'email', maxlength: 100 },
      matricula_Account: { type: 'string', maxlenght: 20 }, 
      password_Account: { type: 'string', minLength: 6, maxlength: 50 },
    },
    additionalProperties: false, 
  },
};

export const loginAccountSchema = {
  body: {
    type: 'object',
    required: ['email_Account', 'password_Account'],
    properties: {
      email_Account: { type: 'string', format: 'email', maxlength: 100 },
      password_Account: { type: 'string', minLength: 6, maxlength: 50 },
    },
    additionalProperties: false, 
  },
};

export const updateAccountSchema = {
  body: {
    type: 'object',
    properties: {
      nome_Account: { type: 'string', maxlength: 100 },
      email_Account: { type: 'string', format: 'email', maxlength: 100 },
      matricula_Account: { type: 'string', maxlenght: 20 },
      password_Account: { type: 'string', minLength: 6, maxlength: 50 },
    },
    additionalProperties: false, 
  },
};

