var router = require('express').Router();

router.use('/books', require('./book/bookRoutes'));

module.exports = router;
