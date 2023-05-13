import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tesouro from 'App/Models/Tesouro'

export default class extends BaseSeeder {
  public async run () {
    await Tesouro.createMany([
      {nome: "Tesla", tipoinvestimento: "Selic", precominimo: 345.65},
      {nome: "Google", tipoinvestimento: "Taxa Fixa", precominimo: 215.20},
      {nome: "Banco do Brasil", tipoinvestimento: "pré-fixado", precominimo: 165.32},
      {nome: "CVC serviços", tipoinvestimento: "Selic ao ano", precominimo: 120.65},
      {nome: "Uber", tipoinvestimento: "Selic diaria", precominimo: 85.32},
      {nome: "Meta", tipoinvestimento: "Selic", precominimo: 108.62},
    ])
  }
}
