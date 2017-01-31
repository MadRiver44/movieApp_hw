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


router.get('/:id/edit', function(req, res, next){
    models.Director.findById(req.params.id)
    .then(function(director){
      res.render('editform', {director: director.name, directorId: director.id} );
    })
    //.then.send(director.name)
})


router.put('/:id' , function(req, res, next){
  models.Director.update({
    name: req.body.name
  }, {where: {id: req.params.id} })
    .then(function() {
      console.log("HEREEEE" + req.params.id);
      res.redirect('/directors/' + req.params.id);
    })

})

module.exports = router;
