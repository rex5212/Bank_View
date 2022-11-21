import { schema, CustomMessages, rules  } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FavoritoAcaoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    acaoId: schema.number([
      rules.exists({ table: 'acaos', column: 'id'}), 
      rules.unsigned()
    ]),
    
    favoritoId: schema.number([
      rules.exists({ table: 'favoritos', column: 'id'}), 
      rules.unsigned()
    ]),
    
  })


  public messages: CustomMessages = {
    exists : 'Esse conjunto de informação que esta referenciando não existe, coloque um existente',
    unsigned :  'Não possui conjunto de informação, que esta referenciando, negativo, coloque um existente',
    required : 'Os campos são obrigatorios para a criação da relação'
  }

}
