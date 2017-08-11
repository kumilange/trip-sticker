var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET stickers listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'change change' });
  // res.send('test');
});

/* POST stickers listing. */
router.post('/', function(req, res, next) {
  // const addedSticker = cache.storeRecord(req.body);
  // res.send(addedSticker);
});

module.exports = router

//
// module.exports = ()=> {
//   /* GET stickers listing. */
//   router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
//
//     // (1)perform DB
//     // return services.db.channels.list()
//     //   //(2)send the data back to client
//     //   .then((channels) => channels.map((channel) => channel.serialize()))
//     //   .then((channels) => res.status(200).json(channels))
//     //   .then(()=> res.render('index', { title: 'test' }))
//     //   .catch((err) => res.status(400).send(err.message));
//   });
//
//   /* POST stickers listing. */
//   router.post('/', function(req, res, next) {
//
//     //(1)perform DB
//     return services.db.channels.create({ name: req.body.name })
//       .then((channels) => res.status(201).json(channels.serialize()))
//       //(2)send the data back to client
//       .then(()=> res.render('index', { title: 'test' }))
//       .catch((err) => res.status(400).send(err.message));
//   });
//
//   return router;
// }

