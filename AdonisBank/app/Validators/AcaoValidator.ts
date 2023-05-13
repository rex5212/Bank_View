import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AcaoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    nome: schema.string([
      rules.maxLength(50),
      rules.minLength(5),
      rules.unique({ table: 'acaos', column: 'nome'})
    ]),

    preco: schema.number([
      rules.unsigned(),
      rules.range(0.01, 9999)
    ]),

    empresa: schema.string([
      rules.maxLength(120),
      rules.minLength(3)
    ])
    
  })


  public messages: CustomMessages = {
    'nome.maxLength' : 'Essa empresa possui um nome muito longo, se for possivel simplifica',
    "nome.minLength" : 'O padrão utilizado simplifica para no minimo 5 caracteres, sendo 4 letras e 1 numero',
    'empresa.maxLength' : 'Esta tentando sobrecarregar o sistema?, se não, fale com um tecnico',
    'empresa.minLength' : 'Necessita especifica qual associação ou tipo ela é',
    unique : 'Cada Ação possui um nome diferente ou numero diferente',
    unsigned : 'Não existe um preço negativo',
    range : 'A Ação tem um limite de 0.01 e 9999',
    required : 'Os campos são obrigatorios para a criação da Ação' 
  }
  
}
