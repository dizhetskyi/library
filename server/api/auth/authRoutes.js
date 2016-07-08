var router = require('express').Router();
var controller = require('./authController.js');

router.post('/signup', controller.signup)
router.post('/signin', controller.signin)
router.post('/validateToken', controller.validateToken)

module.exports = router;
