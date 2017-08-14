module.exports = (knex, Sticker) => {
  return async (params) => {
    try {
      const id = await knex('stickers')
        .returning('id')
        .insert({
          lat: params.lat,
          lng: params.lng,
          country: params.country,
          city: params.city,
          note: params.note,
          username: params.username,
        });

      const sticker = await knex('stickers')
        .where({'id': id[0]})
        .select();
      return new Sticker(sticker[0]);
    } catch (err) {
      throw err;
    }
  };
};