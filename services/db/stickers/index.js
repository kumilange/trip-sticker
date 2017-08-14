const Sticker = function(dbSticker){
  this.id = dbSticker.id;
  this.lat = dbSticker.lat;
  this.lng = dbSticker.lng;
  this.country = dbSticker.country;
  this.city = dbSticker.city;
  this.note = dbSticker.note;
  this.username = dbSticker.username;
};

Sticker.prototype.serialize = function(){
  // use a serializer to format the object and
  // clean out any information that shouldn't be
  // sent to the client
  return {
    id: this.id,
    lat: this.lat,
    lng: this.lng,
    country: this.country,
    city: this.city,
    note: this.note,
    username: this.username,
  };
};

module.exports = (knex) => {
  return {
    create: require('./create')(knex, Sticker),
    update: require('./update')(knex, Sticker),
    delete: require('./delete')(knex, Sticker),
    list: require('./list')(knex, Sticker),
  };
};
