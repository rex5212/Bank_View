import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TesouroUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    nome: schema.string.optional([
      rules.maxLength(50)
    ]),

    precominimo: schema.number.optional([
      rules.unsigned()
    ]),

    tipoinvestimento: schema.string.optional([
      rules.maxLength(40)
    ])
  })


  public messages: CustomMessages = {
    unsigned : 'Não existe um preço negativo',
    'nome.maxLength' : 'Esse nome ultapasou o limite, fale com um tecnico caso queira continua',
    'tipoinvestimento.maxLength' : 'Esse investimento ultapasou o limite, fale com um tecnico caso queira continua',
  }
}
