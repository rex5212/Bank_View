import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Favorito from 'App/Models/Favorito'

export default class extends BaseSeeder {
  public async run () {
    await Favorito.createMany([
      {nome: "", investidorId: 1},
    ])
  }
}
