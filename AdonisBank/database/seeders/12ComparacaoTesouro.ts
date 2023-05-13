import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ComparacaoTesouro from 'App/Models/ComparacaoTesouro'

export default class extends BaseSeeder {
  public async run () {
    await ComparacaoTesouro.createMany([
      {tesouroId: 1, comparacaoId: 1},
      {tesouroId: 2, comparacaoId: 1},
      {tesouroId: 3, comparacaoId: 2},
      {tesouroId: 4, comparacaoId: 2},
      {tesouroId: 5, comparacaoId: 2},
      {tesouroId: 6, comparacaoId: 2},
      {tesouroId: 1, comparacaoId: 3},
      {tesouroId: 3, comparacaoId: 3},
      {tesouroId: 6, comparacaoId: 4},
      {tesouroId: 1, comparacaoId: 4},    
    ])
  }
}
