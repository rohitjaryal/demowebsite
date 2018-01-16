var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Got a get request   asdadasdasdat Index' });
  // res.sendFile('index.html');
});


router.get('/login', function(req, res, next) {
  // res.render('index', { title: 'Express1' });
  // res.sendFile('public/staticPages/index.html');
});



module.exports = router;
