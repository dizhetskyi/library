var router = require('express').Router();

// import models
require('./book/bookModel');
require('./bookTag/bookTagModel');
require('./bookAuthor/bookAuthorModel');
require('./user/userModel');

router.use('/books', require('./book/bookRoutes'));
router.use('/auth', require('./auth/authRoutes'));

module.exports = router;
