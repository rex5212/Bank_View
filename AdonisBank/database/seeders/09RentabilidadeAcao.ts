import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RentabilidadeAcao from 'App/Models/RentabilidadeAcao'

export default class extends BaseSeeder {
  public async run () {
    await RentabilidadeAcao.createMany([
      {acaoId: 1, rentabilidadeId: 1},
      {acaoId: 2, rentabilidadeId: 1},
      {acaoId: 3, rentabilidadeId: 2},
      {acaoId: 4, rentabilidadeId: 2},
      {acaoId: 5, rentabilidadeId: 2},
      {acaoId: 6, rentabilidadeId: 2},
      {acaoId: 1, rentabilidadeId: 3},
      {acaoId: 3, rentabilidadeId: 3},
      {acaoId: 6, rentabilidadeId: 4},
      {acaoId: 1, rentabilidadeId: 4},    
    ])
  }
}
