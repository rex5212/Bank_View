import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ComparacaoAcao from 'App/Models/ComparacaoAcao'

export default class extends BaseSeeder {
  public async run () {
    await ComparacaoAcao.createMany([
      {acaoId: 1, comparacaoId: 1},
    ])
  }
}
