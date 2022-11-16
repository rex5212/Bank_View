import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Comparacao from './Comparacao'

export default class Calendariocomparacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public comparacaoId: number

  @column()
  public diainit: number

  @column()
  public mesinit: number

  @column()
  public anoinit: number

  @column()
  public diaend: number

  @column()
  public mesend: number

  @column()
  public anoend: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Comparacao)
  public comparacao: BelongsTo <typeof Comparacao>
  
}
