module.exports = (knex, Sticker) => {
  return async () => {
    const stickers = await knex('stickers').select();
    let stickerList = [];
    stickers.forEach((sticker) => {
      stickerList.push(new Sticker(sticker));
    });
    return stickerList;
  };
};