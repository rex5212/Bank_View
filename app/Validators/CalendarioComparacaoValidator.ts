import { schema, CustomMessages, rules  } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CalendarioComparacaoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    comparacaoId: schema.number([
      rules.exists({ table: 'calendario_comparacaos', column: 'comparacaoId'}),
      rules.unsigned()
    ]),

    tempo: schema.date({})
  })


  public messages: CustomMessages = {}
}
