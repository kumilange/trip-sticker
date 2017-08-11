var express = require('express');
var router = express.Router();

/* GET stickers listing. */
router.get('/stickers', function(req, res, next) {
  res.send('test');
});

/* POST stickers listing. */
router.post('/stickers', function(req, res, next) {
  const addedSticker = cache.storeRecord(req.body);
  res.send(addedSticker);
});

module.exports = router;
