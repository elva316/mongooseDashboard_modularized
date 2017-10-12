// require mongoose
var mongoose = require('mongoose');
// connect to mongoose!
mongoose.connect('mongodb://localhost/mongooseBBB');           //*****     1     //    connect DB


// require the fs module for loading model files
var fs = require('fs');
// require path for getting the models path
var path = require('path');
// connect to mongoose!

var models_path = path.join(__dirname, './../models');       //*****     2     //   grabing all files from model folder
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {         //*****     3    //   go through each file in and interact with each table and its instance
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
