module.exports = (knex, Sticker) => {
  return async (params) => {
    try {
      await knex('stickers')
        .where({id: params.id})
        .update({
          lat: params.lat,
          lng: params.lng,
          country: params.country,
          city: params.city,
          note: params.note,
          username: params.username,
        });

      const sticker = await knex('stickers')
        .where({id: params.id})
        .select();
      return new Sticker(sticker[0]);
    } catch (err) {
      throw err;
    }
  };
};