module.exports = (knex, Sticker) => {

  return (params) => {

    const lat = params.lat;
    const lng = params.lng;

    return () => knex('stickers').insert({ lat: lat, lng: lng })
      .then(() => {
        return knex('stickers')
          .where({ lat: lat, lng: lng })
          .select();
      })
      .then((stickers) => new Sticker(stickers.pop())) // create a channel model out of the plain database response
      .catch((err) => {

        // sanitize known errors
        if(err.message.match('duplicate key value')) throw new Error('That sticker already exists');

        // throw unknown errors
        throw err;
      });
  };
};