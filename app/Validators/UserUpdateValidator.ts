import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    email: schema.string.optional([
      rules.unique({ table: 'users', column: 'email'}),
    ]),

    password: schema.string.optional([]),

    rememberMeToken: schema.string.optional([])
  })


  public messages: CustomMessages = {}
}
