import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Investidor from './Investidor'
import Calendariocomparacao from './Calendariocomparacao'
import Acao from './Acao'
import Tesouro from './Tesouro'

export default class Comparacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public investidorId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Investidor)
  public investidor: BelongsTo <typeof Investidor>

  @hasMany(() => Calendariocomparacao)
  public calendario: HasMany <typeof Calendariocomparacao>

  @manyToMany(() => Acao, { pivotTable: 'comparacao_acaos'})
  public acoes: ManyToMany <typeof Acao>

  @manyToMany(() => Tesouro, { pivotTable: 'comparacao_tesouros'})
  public tesouros: ManyToMany <typeof Tesouro>

}
