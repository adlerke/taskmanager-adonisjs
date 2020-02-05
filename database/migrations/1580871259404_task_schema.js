"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TaskSchema extends Schema {
  up() {
    this.create("tasks", table => {
      table.increments();
      table.string("name");
      table.text("description");
      table.integer("project_id").unsigned();

      table
        .foreign("project_id")
        .references("projects.id")
        .onDelete("CASCADE");
        

      table.timestamps();
    });
  }

  down() {
    this.drop("tasks");
  }
}

module.exports = TaskSchema;
