import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ComparacaoTesouro from 'App/Models/ComparacaoTesouro'

export default class extends BaseSeeder {
  public async run () {
    await ComparacaoTesouro.createMany([
      {comparacaoId: 1, tesouroId: 1}
    ])
  }
}
