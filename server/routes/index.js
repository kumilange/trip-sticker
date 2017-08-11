const express = require('express');
const router = express.Router();

module.exports = (services)=> {

  /* GET stickers listing. */
  router.get('/', async function(req, res, next) {
    try {
      let stickers = await services.db.stickers.list();
      stickers = stickers.map((sticker) => sticker.serialize());
      res.status(200).send(stickers);
    } catch(err) {
      res.status(400).send(err.message);
    }
  });

  /* POST stickers listing. */
  router.post('/', async function(req, res, next) {
    try {
      let sticker = await services.db.stickers.create(req.body);
      res.status(200).send(sticker);
    } catch(err) {
      res.status(400).send(err.message);
    }
  });

  return router;
}

