module.exports = (knex, Sticker) => {

  return async (params) => {
    try {
      const lat = params.lat;
      const lng = params.lng;
      await knex('stickers').insert({lat: lat, lng: lng});
      // TODO idに直す
      const stickers = await knex('stickers')
        .where({ lat: lat, lng: lng })
        .select();
      return new Sticker(stickers.pop());
    } catch (err) {
      throw err;
    }

    //       .select();
    // }

    // return () => knex('stickers').insert({lat: lat, lng: lng})
    //   .then(() => {
    //     return knex('stickers')
    //       .where({ lat: lat, lng: lng })
    //       .select();
    //   })
    //   .then((stickers)=> {
    //     console.log(stickers)
    //     return stickers;
    //   })
    //   .then((stickers) => new Sticker(stickers.pop())) // create a channel model out of the plain database response
    //   .catch((err) => {
    //     // sanitize known errors
    //     if(err.message.match('duplicate key value')) throw new Error('That sticker already exists');
    //     // throw unknown errors
    //     throw err;
    //   });
  };
};