'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnDuedateInTasksSchema extends Schema {
  up () {
    this.alter('tasks', (table) => {

      table.date('due_date')
    })
  }

  down () {
    this.alter('tasks', (table) => {
      table.dropColumn('due_date')
    })
  }
}

module.exports = AddColumnDuedateInTasksSchema
