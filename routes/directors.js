var express = require('express');
var router = express.Router();
var models = require('../db/models/index');

// basic route for directors, when /directors is called
// we go to directors.ejs and pass title in to render "Directors"
router.get('/', function(req, res){
  models.Director.findAll({})
    .then(function(director) {
      res.render('directors', {
        title : "Directors",
        director: director
      });
    });
});



router.get('/:id', function(req, res, next) {
  models.Director.findById(req.params.id)
    .then(function(director){
      res.render('showById', {director: director.name});
    })
});

module.exports = router;
