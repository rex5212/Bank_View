import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Calendario extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public dia: number
  
  @column()
  public mes: number
  
  @column()
  public ano: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
