const Knex = require('knex');

module.exports = function(config){

  // initialize a connection to the database, and pass this
  // to the various submodules within
  const knex = Knex({
    client: config.client,
    port     : config.connection.port,
    connection: {
      host     : config.connection.host,
      database : config.connection.database
    }
  });

  return {
    stickers: require('./stickers')(knex),
  };

};