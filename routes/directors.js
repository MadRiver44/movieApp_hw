var express = require('express');
var router = express.Router();
var models = require('../db/models/index');

router.get('/', function(req, res){
  res.render('directors', {title: "Directors"})
});


router.get('/:id', function(req, res, next) {
  models.Director.findById(req.params.id)
    .then(function(director){
      res.render('showById', {director: director.name});
    })
});

module.exports = router;
