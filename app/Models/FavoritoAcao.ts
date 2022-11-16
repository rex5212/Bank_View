import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Acao from './Acao'
import Favorito from './Favorito'

export default class FavoritoAcao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public acaoId: number

  @column()
  public favoritoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => Acao)
  public acao: BelongsTo <typeof Acao>   

  @belongsTo(() => Favorito)
  public favorito: BelongsTo <typeof Favorito>

}
