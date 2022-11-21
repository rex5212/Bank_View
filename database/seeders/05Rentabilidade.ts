import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Rentabilidade from 'App/Models/Rentabilidade'

export default class extends BaseSeeder {
  public async run () {
    await Rentabilidade.createMany([
      {investidorId: 1, nome: 'Level'},
      {investidorId: 2, nome: 'igual'},
      {investidorId: 3, nome: 'Igualdade'},
      {investidorId: 4, nome: 'Normatização'},
    ])
  }
}
