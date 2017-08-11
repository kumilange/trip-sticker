const express = require('express');
const router = express.Router();

module.exports = (services)=> {

  /* GET stickers listing. */
  router.get('/', async function(req, res, next) {
    try {
      let stickers = await services.db.stickers.list();
      stickers = stickers.map((sticker) => sticker.serialize());
      res.status(200).send(stickers);
      res.end();
    } catch(err) {
      res.status(400).send(err.message);
    }
  });

  /* POST stickers listing. */
  router.post('/', function(req, res, next) {
    // const addedSticker = cache.storeRecord(req.body);
    // res.send(addedSticker);
  });

  return router;
}

