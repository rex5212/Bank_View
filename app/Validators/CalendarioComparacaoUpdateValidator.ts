import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CalendarioComparacaoUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    comparacaoId: schema.number.optional([
      rules.exists({ table: 'comparacaos', column: 'id'}),
      rules.unsigned()
    ]),

    tempoinit: schema.date.optional({}, [
      rules.unsigned()
    ]),

    tempoend: schema.date.optional({}, [
      rules.unsigned()
    ])
  })


  public messages: CustomMessages = {
    exists : 'Esse conjunto de informação que esta referenciando não existe, coloque um existente',
    'comparacaoId.unsigned' :  'Não possui conjunto de informação, que esta referenciando, negativo, coloque um existente',
    'tempoinit.unsigned' :  'Não existe, dia, mes ou ano nulo',
    'tempoend.unsigned' :  'Não existe, dia, mes ou ano nulo',
  }
}
