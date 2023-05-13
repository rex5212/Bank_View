import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Calendariorentabilidade from 'App/Models/Calendariorentabilidade'

export default class extends BaseSeeder {
  public async run () {
    await Calendariorentabilidade.createMany([
      {rentabilidadeId: 1, tempoinit: new Date(12,7,2002), tempoend: new Date(8,7,2015)},
      {rentabilidadeId: 2, tempoinit: new Date(12,7,2002), tempoend: new Date(8,7,2015)},
      {rentabilidadeId: 3, tempoinit: new Date(12,7,2002), tempoend: new Date(8,7,2015)},
      {rentabilidadeId: 4, tempoinit: new Date(12,7,2002), tempoend: new Date(8,7,2015)},    ])
  }
}
