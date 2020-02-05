'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CostumerSchema extends Schema {
  up () {
    this.create('costumers', (table) => {
      table.increments()
      table.string('name', 250);
      table.text('description');
      table.timestamps()
    })
  }

  down () {
    this.drop('costumers')
  }
}

module.exports = CostumerSchema
