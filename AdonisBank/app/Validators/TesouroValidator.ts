import { schema, CustomMessages, rules  } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TesouroValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    nome: schema.string.optional([
      rules.maxLength(50)
    ]),

    precominimo: schema.number([
      rules.unsigned()
    ]),

    tipoinvestimento: schema.string([
      rules.maxLength(40)
    ])
  })


  public messages: CustomMessages = {
    unsigned : 'Não existe um preço negativo',
    'nome.maxLength' : 'Esse nome ultapasou o limite, fale com um tecnico caso queira continua',
    'tipoinvestimento.maxLength' : 'Esse investimento ultapasou o limite, fale com um tecnico caso queira continua',
    required : 'Os campos são obrigatorios para a criação do tesouro'
  }
}
