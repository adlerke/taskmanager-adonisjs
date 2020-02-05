'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnProjectmanagerInCostumersSchema extends Schema {
  up () {
    this.alter('costumers', (table) => {
      
      table.integer('manager_id').unsigned()
      table.foreign('manager_id').references('users.id').onDelete('set null')
      

    })
  }

  down () {
    this.alter('costumers', (table) => {
table.dropColumn('manager_id')
    })
  }
}

module.exports = AddColumnProjectmanagerInCostumersSchema
