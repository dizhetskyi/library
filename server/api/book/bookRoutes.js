var router = require('express').Router();
var controller = require('./bookController');

router.route('/')
  .get(controller.get)

module.exports = router;
