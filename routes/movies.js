var express = require('express');
var router = express.Router();
var models = require('../db/models/index');


/* GET home page. */

router.get('/', function(req, res, next) {
  models.Movie.findAll({}).then((movies) => {
        res.render('movies', {
          title: 'movies',
          movies:movies
        });
  })
});

router.get('/:id', function(req, res, next) {
  models.Movie.findById(req.params.id).then((movie) => {
        res.render('moviePage', {
          title: movie.title,
          sum:movie.synopsis
        });
  })
});


// router.get('/', function(req, res, next) {
//   res.render('movies', { title: 'movies' });
// });

// router.get('/', function(req, res, next) {
//   res.render('movies', { title: 'movies' });
// });

module.exports = router;
