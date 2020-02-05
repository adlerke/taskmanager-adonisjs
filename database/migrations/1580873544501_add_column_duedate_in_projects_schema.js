"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddColumnDuedateInProjectsSchema extends Schema {
  up() {
    this.alter("projects", table => {
      table.date("due_date");
    });
  }

  down() {
    this.alter("projects", table => {
      table.dropColumn("due_date");
    });
  }
}

module.exports = AddColumnDuedateInProjectsSchema;
