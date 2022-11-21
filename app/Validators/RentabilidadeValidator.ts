import { schema, CustomMessages, rules  } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RentabilidadeValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    nome: schema.string.optional([
      rules.maxLength(18)
    ]),

    investidorId: schema.number([
      rules.exists({ table: 'investidors', column: 'id'}), 
      rules.unsigned()
    ]),

  })

  public messages: CustomMessages = {
    exists : 'Esse conjunto de informação que esta referenciando não existe, coloque um existente',
    unsigned :  'Não possui conjunto de informação, que esta referenciando, negativo, coloque um existente',
    minLength : 'Nome muito grande para pode simplifica',
    required : 'Os campos são obrigatorios para a criação da rentabilidade'
  }

}
