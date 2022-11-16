import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FavoritoTesouro from 'App/Models/FavoritoTesouro'

export default class extends BaseSeeder {
  public async run () {
    await FavoritoTesouro.createMany([
      {favoritoId: 1, tesouroId: 1}
    ])
  }
}
