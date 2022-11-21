import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Calendariocomparacao from 'App/Models/Calendariocomparacao'

export default class extends BaseSeeder {
  public async run () {
    await Calendariocomparacao.createMany([
      {comparacaoId: 1, tempoinit: new Date(12,7,2002), tempoend: new Date(8,7,2015)},
    ])
  }
}
