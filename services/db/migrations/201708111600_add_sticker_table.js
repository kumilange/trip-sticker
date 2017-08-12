exports.up = function(knex, Promise) {
  // create the 'stickers' table with three columns
  return knex.schema.createTable('stickers', (t) => {
    t.increments()
      .index();

    t.float('lat')
      .notNullable()

    t.float('lng')
      .notNullable()

    t.text('country')

    t.text('city')

    t.text('note')

    t.text('username')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stickers');
};
