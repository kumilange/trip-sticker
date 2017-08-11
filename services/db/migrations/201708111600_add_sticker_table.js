exports.up = function(knex, Promise) {
  // create the 'stickers' table with three columns
  return knex.schema.createTable('stickers', (t) => {
    t.increments()
      .index();

    t.float('lat')
      .notNullable()

    t.float('lng')
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stickers');
};
