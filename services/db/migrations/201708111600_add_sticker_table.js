/*
The first migration. Notice the filename is prefixed with the timestamp of the time the
migration was created. This is so we can keep track of the order of migrations.

To run all migrations, you can also run `knex migrate:latest` from the services/db folder.
To roll back the migrations you just ran, you can use `knex migrate:rollback`
*/

exports.up = function(knex, Promise) {

  // create the 'users' table with three columns
  return knex.schema.createTable('stickers', (t) => {

    t.increments()
      .index();

    t.float('lat')
      .notNullable()

    t.float('lng')
      .notNullable()
  });
};

exports.down = function(knex, Promise) {
  // undo this migration by destroying the 'users' table
  return knex.schema.dropTable('stickers');
};
