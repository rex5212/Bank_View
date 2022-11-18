import { schema, CustomMessages, rules  } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ComparacaoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({})


  public messages: CustomMessages = {}
}
