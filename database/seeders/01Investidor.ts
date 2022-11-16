import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Investidor from 'App/Models/Investidor'

export default class extends BaseSeeder {
  public async run () {
    await Investidor.createMany([
      {nome: "", cpf: "", email: "", telefone: "", senha: "", assinaturaeletronica: ""},
    ])
  }
}
