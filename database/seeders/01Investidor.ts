import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Investidor from 'App/Models/Investidor'

export default class extends BaseSeeder {
  public async run () {
    await Investidor.createMany([
      {nome: "Renato Ostemberg dos Santos", cpf: "087.685.685-65", email: "xrexv158925lpo@gmail.com", telefone: "(61) 98657-4235", senha: "123", assinaturaeletronica: "abc1234"},
      {nome: "Orion Tales", cpf: "087.645.685-25", email: "renatosantosv12@hotmail.com", telefone: "(61) 98754-9874", senha: "123", assinaturaeletronica: "abc1234"},
      {nome: "Henrique dos Santos", cpf: "757.685.685-67", email: "", telefone: "(61) 93557-4245", senha: "123", assinaturaeletronica: "abc1234"},
      {nome: "Rafael dos Santos", cpf: "121.685.685-15", email: "", telefone: "(61) 98957-3745", senha: "123", assinaturaeletronica: "abc1234"},
    ])
  }
}
