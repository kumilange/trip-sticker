module.exports = (knex, Sticker) => {

  return () => {
    return () => {
      return knex('stickers').select()
        .then((stickers)=> {
          let stickerList = [];
          stickerList.forEach((sticker) => {
            stickerList.push(new Sticker(sticker));
          });
          return stickerList;
        });
    };
  };
};