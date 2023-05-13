import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Rentabilidade from './Rentabilidade'
import Comparacao from './Comparacao'
import Favorito from './Favorito'

export default class Acao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public preco: number

  @column()
  public empresa: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @manyToMany(() => Rentabilidade, { pivotTable: 'rentabilidade_acaos' })
  public rentabilidades: ManyToMany <typeof Rentabilidade>
  
  @manyToMany(() => Comparacao, { pivotTable: 'comparacao_acaos' })
  public comparacoes: ManyToMany <typeof Comparacao>
  
  @manyToMany(() => Favorito, { pivotTable: 'favorito_acaos' })
  public favoritos: ManyToMany <typeof Favorito>

}
