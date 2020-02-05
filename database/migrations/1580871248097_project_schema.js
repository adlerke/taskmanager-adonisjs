"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjectSchema extends Schema {
  up() {
    this.create("projects", table => {
      table.increments();
      table.integer("costumer_id").unsigned();
      table
        .foreign("costumer_id")
        .references("costumers.id")
        .onDelete("cascade");
      table.string("name");
      table.text("desctiption");
      table.timestamps();
    });
  }

  down() {
    this.drop("projects");
  }
}

module.exports = ProjectSchema;
