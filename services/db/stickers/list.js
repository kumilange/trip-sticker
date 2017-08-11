module.exports = (knex, Sticker) => {
  return async () => {
    try {
      const stickers = await knex('stickers').select();
      let stickerList = [];
      stickers.forEach((sticker) => {
        stickerList.push(new Sticker(sticker));
      });
      return stickerList;
    } catch (err) {
      throw err;
    }
  };
};