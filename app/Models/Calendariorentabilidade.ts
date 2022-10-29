import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Calendariorentabilidade extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public calendarioId: number

  @column()
  public rentabilidadeId: number

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
}
