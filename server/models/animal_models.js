// require mongoose
var mongoose = require('mongoose');                       //*****     1     //    connect DB

// create the schema
var AnimalSchema = new mongoose.Schema({                //*****     2     //
 name: {type: String, required: true, minlength: 2},
 description: {type: String, required: true, minlenth: 6}
},{timestamps: true })


// register the schema as a model

var Animal = mongoose.model('Animal', AnimalSchema) // We are retrieving    //*****     3     //
