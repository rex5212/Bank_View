import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ComparacaoTesouroUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    tesouroId: schema.number.optional([
      rules.exists({ table: 'tesouros', column: 'id'}), 
      rules.unsigned()
    ]),
    
    comparacaoId: schema.number.optional([
      rules.exists({ table: 'comparacaos', column: 'id'}), 
      rules.unsigned()
    ]),

  })


  public messages: CustomMessages = {
    exists : 'Esse conjunto de informação que esta referenciando não existe, coloque um existente',
    unsigned :  'Não possui conjunto de informação, que esta referenciando, negativo, coloque um existente',
  }

}
