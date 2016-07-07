var router = require('express').Router();
var controller = require('./authController');

router.route('/signup')
  .get(controller.signup)

module.exports = router;
