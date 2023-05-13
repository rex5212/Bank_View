import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FavoritoAcao from 'App/Models/FavoritoAcao'

export default class extends BaseSeeder {
  public async run () {
    await FavoritoAcao.createMany([
      {acaoId: 1, favoritoId: 2},
      {acaoId: 2, favoritoId: 2},
      {acaoId: 3, favoritoId: 2},
      {acaoId: 4, favoritoId: 2},
      {acaoId: 5, favoritoId: 2},
      {acaoId: 6, favoritoId: 2},      
      {acaoId: 1, favoritoId: 1},
      {acaoId: 2, favoritoId: 1},
      {acaoId: 3, favoritoId: 1},
      {acaoId: 4, favoritoId: 1},
      {acaoId: 5, favoritoId: 1},
      {acaoId: 6, favoritoId: 1},      
      {acaoId: 1, favoritoId: 3},
      {acaoId: 2, favoritoId: 3},
      {acaoId: 3, favoritoId: 3},
      {acaoId: 4, favoritoId: 3},
      {acaoId: 5, favoritoId: 3},
      {acaoId: 6, favoritoId: 3},      
      {acaoId: 1, favoritoId: 4},
      {acaoId: 2, favoritoId: 4},
      {acaoId: 3, favoritoId: 4},
      {acaoId: 4, favoritoId: 4},
      {acaoId: 5, favoritoId: 4},
      {acaoId: 6, favoritoId: 4},      
    ])
  }
}
