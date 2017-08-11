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
  };
};