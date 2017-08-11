const Sticker = function(dbSticker){
  this.lat = dbSticker.lat;
  this.lng = dbSticker.lng;
};

Sticker.prototype.serialize = function(){
  // we use a serializer to format the object and
  // clean out any information that shouldn't be
  // sent to the client
  return {
    lat: this.lat,
    lng: this.lng,
  };
};

module.exports = (knex) => {
  return {
    create: require('./create')(knex, Sticker),
    list: require('./list')(knex, Sticker),
  };
};
