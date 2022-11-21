import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Favorito from 'App/Models/Favorito'

export default class extends BaseSeeder {
  public async run () {
    await Favorito.createMany([
      {nome: "Dinheiro", investidorId: 1},
      {nome: "Money", investidorId: 2},
      {nome: "Coin", investidorId: 3},
      {nome: "Moeda", investidorId: 4},
    ])
  }
}
