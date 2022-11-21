import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RentabilidadeTesouro from 'App/Models/RentabilidadeTesouro'

export default class extends BaseSeeder {
  public async run () {
    await RentabilidadeTesouro.createMany([
      {tesouroId: 1, rentabilidadeId: 1},
      {tesouroId: 2, rentabilidadeId: 1},
      {tesouroId: 3, rentabilidadeId: 2},
      {tesouroId: 4, rentabilidadeId: 2},
      {tesouroId: 5, rentabilidadeId: 2},
      {tesouroId: 6, rentabilidadeId: 2},
      {tesouroId: 1, rentabilidadeId: 3},
      {tesouroId: 3, rentabilidadeId: 3},
      {tesouroId: 6, rentabilidadeId: 4},
      {tesouroId: 1, rentabilidadeId: 4},        
    ])
  }
}
