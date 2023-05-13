import { schema, CustomMessages, rules  } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class InvestidorValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    nome: schema.string([
      rules.alpha({ allow: ['space']}),
      rules.unique({ table: 'investidors', column: 'nome'})
    ]),

    telefone: schema.string([
      rules.regex(/^\(?[1-9]{2}\)? ?[9-9]{1}|[0-9]{4}\-?[0-9]{4}$/),
      rules.unique({ table: 'investidors', column: 'telefone'})
    ]),

    email: schema.string([
      rules.email()
    ]),

    senha: schema.string([
      rules.minLength(6)
    ]),

    cpf: schema.string([
      rules.regex(/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/),
      rules.unique({ table: 'investidors', column: 'cpf'})
    ]),

    assinaturaeletronica: schema.string([
      rules.regex(/^[a-zA-Z0-9]{7}$/)
    ])
  })


  public messages: CustomMessages = {
    'senha.minLength' : 'Coloque uma senha de no minimo {{option.senha}}',
    'telefone.regex' : 'O Telefone so aceita numero e alguns caracteres especial, sendo o formato, (00) 90000-0000 ou 90000-0000',
    'cpf.regex' : 'O cpf so aceita numeros, podendo se no formato 000.000.000-00 ou 00000000000',
    'assinaturaeletronica.regex' : 'A assinatura eletronica aceita 7 caracteres, podendo se numeros ou letras',
    required : 'Os campos são obrigatorios para a criação do seu cadastro de investidor'
  }
}
