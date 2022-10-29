import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'favoritos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 25).notNullable()
      table.integer('investidor_id').unsigned().references('id').inTable('investidors').notNullable()
      table.integer('tesouro_id').unsigned().references('id').inTable('tesouros')
      table.integer('acao_id').unsigned().references('id').inTable('acaos')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
