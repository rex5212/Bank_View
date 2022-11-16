import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Calendariocomparacao from 'App/Models/Calendariocomparacao'

export default class extends BaseSeeder {
  public async run () {
    await Calendariocomparacao.createMany([
      {comparacaoId: 1, diainit: 0, mesinit: 0, anoinit: 0, diaend: 0, mesend: 0, anoend: 0},
    ])
  }
}
