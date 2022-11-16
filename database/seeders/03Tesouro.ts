import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tesouro from 'App/Models/Tesouro'

export default class extends BaseSeeder {
  public async run () {
    await Tesouro.createMany([
      {nome: "", tipoinvestimento: "", precominimo: 0}
    ])
  }
}
