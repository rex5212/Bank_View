import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Rentabilidade from './Rentabilidade'
import Comparacao from './Comparacao'
import Favorito from './Favorito'
import Hash from '@ioc:Adonis/Core/Hash'

export default class Investidor extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome: string
  
  @column()
  public telefone: string
  
  @column()
  public email: string
  
  @column()
  public senha: string
  
  @column()
  public cpf: string
  
  @column()
  public assinaturaeletronica: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashsenha (investidor: Investidor) {
    if (investidor.$dirty.senha) {
      investidor.senha = await Hash.make(investidor.senha)
    }
  }

  @hasMany(() => Rentabilidade)
  public rentabilidades: HasMany <typeof Rentabilidade>

  @hasMany(() => Comparacao)
  public Comparacoes: HasMany <typeof Comparacao>

  @hasMany(() => Favorito)
  public favoritos: HasMany <typeof Favorito>

}
