import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FavoritoTesouro from 'App/Models/FavoritoTesouro'

export default class extends BaseSeeder {
  public async run () {
    await FavoritoTesouro.createMany([
      {tesouroId: 1, favoritoId: 2},
      {tesouroId: 2, favoritoId: 2},
      {tesouroId: 3, favoritoId: 2},
      {tesouroId: 4, favoritoId: 2},
      {tesouroId: 5, favoritoId: 2},
      {tesouroId: 6, favoritoId: 2},
      {tesouroId: 1, favoritoId: 4},
      {tesouroId: 2, favoritoId: 4},
      {tesouroId: 3, favoritoId: 4},
      {tesouroId: 4, favoritoId: 4},
      {tesouroId: 5, favoritoId: 4},
      {tesouroId: 6, favoritoId: 4},
      {tesouroId: 1, favoritoId: 3},
      {tesouroId: 2, favoritoId: 3},
      {tesouroId: 3, favoritoId: 3},
      {tesouroId: 4, favoritoId: 3},
      {tesouroId: 5, favoritoId: 3},
      {tesouroId: 6, favoritoId: 3},
      {tesouroId: 1, favoritoId: 1},
      {tesouroId: 2, favoritoId: 1},
      {tesouroId: 3, favoritoId: 1},
      {tesouroId: 4, favoritoId: 1},
      {tesouroId: 5, favoritoId: 1},
      {tesouroId: 6, favoritoId: 1},
    ])
  }
}
