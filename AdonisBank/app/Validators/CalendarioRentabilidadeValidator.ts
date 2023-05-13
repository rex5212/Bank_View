import { schema, CustomMessages, rules  } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CalendarioRentabilidadeValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    rentabilidadeId: schema.number([
      rules.exists({ table: 'rentabilidades', column: 'id'}),
      rules.unsigned()
    ]),

    tempoinit: schema.date({}),

    tempoend: schema.date.optional({})
  })


  public messages: CustomMessages = {
    exists : 'Esse conjunto de informação que esta referenciando não existe, coloque um existente',
    'comparacaoId.unsigned' :  'Não possui conjunto de informação, que esta referenciando, negativo, coloque um existente',
    unsigned :  'Não existe dia, mes ou ano nulo',
    'tempoinit.unsigned' :  'Não existe, dia, mes ou ano nulo',
    'tempoend.unsigned' :  'Não existe, dia, mes ou ano nulo',
    required : 'Os campos são obrigatorios para a criação do calendario' 
  }
}
