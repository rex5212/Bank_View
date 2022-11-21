import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comparacao from 'App/Models/Comparacao'

export default class extends BaseSeeder {
  public async run () {
    await Comparacao.createMany([
      {nome: "Peixe Pequeno", investidorId: 1},
    ])
  }
}
