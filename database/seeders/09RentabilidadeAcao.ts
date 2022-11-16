import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RentabilidadeAcao from 'App/Models/RentabilidadeAcao'

export default class extends BaseSeeder {
  public async run () {
    await RentabilidadeAcao.createMany([
      {rentabilidadeId: 1,  acaoId: 1},
    ])
  }
}
