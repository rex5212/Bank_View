import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Rentabilidade from './Rentabilidade'
import Tesouro from './Tesouro'

export default class RentabilidadeTesouro extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public tesouroId: number

  @column()
  public rentabilidadeId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => Tesouro)
  public tesouro: BelongsTo <typeof Tesouro>   

  @belongsTo(() => Rentabilidade)
  public rentabilidade: BelongsTo <typeof Rentabilidade>
  
}
