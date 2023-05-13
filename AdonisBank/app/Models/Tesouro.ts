import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Favorito from './Favorito'
import Comparacao from './Comparacao'
import Rentabilidade from './Rentabilidade'

export default class Tesouro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public precominimo: number

  @column()
  public tipoinvestimento: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Rentabilidade, { pivotTable: 'rentabilidade_tesouros' })
  public rentabilidades: ManyToMany <typeof Rentabilidade>
  
  @manyToMany(() => Comparacao, { pivotTable: 'comparacao_tesouros' })
  public comparacoes: ManyToMany <typeof Comparacao>
  
  @manyToMany(() => Favorito, { pivotTable: 'favorito_tesouros' })
  public favoritos: ManyToMany <typeof Favorito>

}
