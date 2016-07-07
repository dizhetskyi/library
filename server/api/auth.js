var router = require('express').Router();
var User = require('mongoose').model('User');
var jwt = require('jsonwebtoken');

router.post('/signup', (req, res, next) => {

  User.findOne({login: req.body.login}, (err, user) => {
    if (err){
      return next(err);
    }

    if (user !== null){
      res.json({
        success: false,
        error: 'Login already exist'
      });
      return;
    }

    User.create(req.body, function(err, createdUser) {
      if (err){
        return next(err);
      }

      var payload = {
        login: createdUser.login
      };
      var secret = req.app.get('secret');
      var options = {
        expiresIn: 60 * 1
      }

      var token = jwt.sign(payload, secret, options);

      res.json({
        token
      });
    })
    
  })

  
})

module.exports = router;
