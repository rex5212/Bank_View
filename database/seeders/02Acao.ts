import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Acao from 'App/Models/Acao'

export default class extends BaseSeeder {
  public async run () {
    await Acao.createMany([
      {empresa: "", nome: "", preco: 0},
    ])
  }
}
