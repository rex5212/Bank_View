import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RentabilidadeTesouro from 'App/Models/RentabilidadeTesouro'

export default class extends BaseSeeder {
  public async run () {
    await RentabilidadeTesouro.createMany([
      {rentabilidadeId: 1, tesouroId: 1},
    ])
  }
}
