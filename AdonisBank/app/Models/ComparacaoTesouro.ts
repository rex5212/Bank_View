import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Tesouro from './Tesouro'
import Comparacao from './Comparacao'

export default class ComparacaoTesouro extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public tesouroId: number

  @column()
  public comparacaoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Tesouro)
  public tesouro: BelongsTo <typeof Tesouro>   

  @belongsTo(() => Comparacao)
  public comparacao: BelongsTo <typeof Comparacao>
  
}
