import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Acao from 'App/Models/Acao'

export default class extends BaseSeeder {
  public async run () {
    await Acao.createMany([
      {empresa: "Google", nome: "GOGL3", preco: 56.78},
      {empresa: "Google", nome: "GOGL4", preco: 56.78},
      {empresa: "Magazine Luiza", nome: "MAGL4", preco: 3.21},
      {empresa: "Santande", nome: "SANT3", preco: 24.35},
      {empresa: "Banco do Brasil", nome: "BANC4", preco: 32.15},
      {empresa: "Telecomunicação Oi", nome: "TCOI3", preco: 0.41},
    ])
  }
}
