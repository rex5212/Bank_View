import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comparacao from 'App/Models/Comparacao'

export default class extends BaseSeeder {
  public async run () {
    await Comparacao.createMany([
      {nome: "Nivel", investidorId: 1},
      {nome: "Estabilidade", investidorId: 2},
      {nome: "Nivelamento", investidorId: 3},
      {nome: "Padronização", investidorId: 4},
    ])
  }
}
