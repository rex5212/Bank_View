import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'calendariorentabilidades'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('calendario_id').unsigned().references('id').inTable('calendarios')
      table.integer('rentabilidade_id').unsigned().references('id').inTable('rentabilidades')
      table.integer('diainit')
      table.integer('mesinit')
      table.integer('anoinit')
      table.integer('diaend')
      table.integer('mesend')
      table.integer('anoend')

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
