import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FavoritoAcao from 'App/Models/FavoritoAcao'

export default class extends BaseSeeder {
  public async run () {
    await FavoritoAcao.createMany([
      {acaoId: 1, favoritoId: 1},
    ])
  }
}
