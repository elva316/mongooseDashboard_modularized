// Require the Mongoose Module
var mongoose = require('mongoose');

var setup = require('./../controllers/animal_model_functionality.js');

module.exports = function(app) {

  app.get('/', function(req, res) {
    setup.showAll(req,res);
    // res.render('index')
  });
  app.get('/mongoose/new',function(req,res){
    // console.log("HIISJDHSJKDHGSII")
    setup.createPage(req, res);
  // res.render('new');
  });
  app.post('/mongooses', function(req,res){
    setup.create(req,res);
  });
  app.get('/mongoose/:one_id', function(req,res){
    console.log();
    setup.showOne(req, res);
  });
  app.get('/mongoose/edit/:edit_id', function(req,res){
    setup.editing(req, res);
  });
  app.post('/mongoose/:n', function(req,res){
    setup.editSubmit(req, res);
  });
  app.get('/mongoose/destroy/:id', function(req,res){
    setup.destroy(req, res);
  });
}
