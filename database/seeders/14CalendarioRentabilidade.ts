import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Calendariorentabilidade from 'App/Models/Calendariorentabilidade'

export default class extends BaseSeeder {
  public async run () {
    await Calendariorentabilidade.createMany([
      {rentabilidadeId: 1, diainit: 0, mesinit: 0, anoinit: 0, diaend: 0, mesend: 0, anoend: 0},
    ])
  }
}
