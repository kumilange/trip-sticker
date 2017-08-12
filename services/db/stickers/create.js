module.exports = (knex, Sticker) => {

  return async (params) => {
    try {
      await knex('stickers')
        .insert({
          lat: params.lat,
          lng: params.lng,
          country: params.country,
          city: params.city,
          note: params.note,
          username: params.username,
        });
      // TODO idに直す
      const stickers = await knex('stickers')
        .select();
      return new Sticker(stickers.pop());
    } catch (err) {
      throw err;
    }
  };
};