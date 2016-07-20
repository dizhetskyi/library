var User = require('mongoose').model('User');
var jwt = require('jsonwebtoken');

module.exports.signup = (req, res, next) => {

  User.findOne({login: req.body.login}, (err, user) => {
    if (err){
      return next(err);
    }

    if (user !== null){
      res.json({
        success: false,
        message: 'Login already exist'
      });
      return;
    }

    User.create(req.body, function(err, createdUser) {
      if (err){
        return next(err);
      }

      res.json({
        success: true
      });
    })
    
  })
  
}

module.exports.signin = (req, res, next) => {

  User.findOne({login: req.body.login}, (err, user) => {

    if (err){
      return next(err);
    }

    if (user === null || user.password !== req.body.password){
      res.json({
        success: false,
        message: 'Incorrect Login or Password'
      });
      return;
    }

    var payload = {
      login: user.login,
      role: user.role
    };
    var secret = req.app.get('secret');
    var options = {
      expiresIn: 60 * 60
    }

    var token = jwt.sign(payload, secret, options);

    res.json({
      success: true,
      token
    });

  })
  
}

module.exports.validateToken = (req, res, next) => {

  if (req.token){
    jwt.verify(req.token, req.app.get('secret'), function(err, decoded) {      
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        return res.json({ success: true });
      }

    });
  } else {
    return next({name: 'UnauthorizedError'});    
  }

}