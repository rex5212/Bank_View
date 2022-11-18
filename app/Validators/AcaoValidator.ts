import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AcaoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    nome: schema.string([
      rules.maxLength(30),
      rules.minLength(3),
      rules.unique({ table: 'acaos', column: 'nome'})
    ]),

    preco: schema.number([
      rules.unsigned(),
      rules.range(0.1, 9999)
    ]),

    empresa: schema.string([
      rules.maxLength(45),
      rules.minLength(5)
    ])
    
  })


  public messages: CustomMessages = {}
}
