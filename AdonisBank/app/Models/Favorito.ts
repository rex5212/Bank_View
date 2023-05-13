import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Investidor from './Investidor'
import Tesouro from './Tesouro'
import Acao from './Acao'

export default class Favorito extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome: string
  
  @column()
  public investidorId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Investidor)
  public investidor: BelongsTo <typeof Investidor>

  @manyToMany(() => Tesouro, { pivotTable: 'favorito_tesouros'})
  public tesouros: ManyToMany <typeof Tesouro>

  @manyToMany(() => Acao, { pivotTable: 'favorito_acaos'})
  public acoes: ManyToMany <typeof Acao>
  
}
