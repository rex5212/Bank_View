import { schema, CustomMessages, rules  } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({

    email: schema.string([
      rules.unique({ table: 'users', column: 'email'}),
    ]),

    password: schema.string([]),

    rememberMeToken: schema.string.optional([])
  })


  public messages: CustomMessages = {
    required : 'Os campos são obrigatorios para a criação do Autenticador'
  }
}
