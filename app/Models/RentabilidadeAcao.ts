import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Acao from './Acao'
import Rentabilidade from './Rentabilidade'

export default class RentabilidadeAcao extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public acaoId: number

  @column()
  public rentabilidadeId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Acao)
  public acao: BelongsTo <typeof Acao>   

  @belongsTo(() => Rentabilidade)
  public rentabilidade: BelongsTo <typeof Rentabilidade>

}
