import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ComparacaoAcao from 'App/Models/ComparacaoAcao'

export default class extends BaseSeeder {
  public async run () {
    await ComparacaoAcao.createMany([
      {acaoId: 1, comparacaoId: 1},
      {acaoId: 2, comparacaoId: 1},
      {acaoId: 3, comparacaoId: 2},
      {acaoId: 4, comparacaoId: 2},
      {acaoId: 5, comparacaoId: 2},
      {acaoId: 6, comparacaoId: 2},
      {acaoId: 1, comparacaoId: 3},
      {acaoId: 3, comparacaoId: 3},
      {acaoId: 6, comparacaoId: 4},
      {acaoId: 1, comparacaoId: 4},
    ])
  }
}
