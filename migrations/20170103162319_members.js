'use strict';

exports.up = function(knex, Promise) {
  knex.schema.createTable('members', function(table) {
    table.incrememts();
    table.string('name');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('members');
};
