var mongoose = require('mongoose');                                 //*****     1     //
var Animal = mongoose.model('Animal')                                //*****     2     //

module.exports = {                                                    //  functionalities   for export
  showAll: function(req, res) {                                           // show
    Animal.find({}, function(err, fetched_animals) {
      if (err) {
        console.log("Unable to fetch animal!!");
      }else{
        console.log("Successfully fetched animal(s):", fetched_animals);
        res.render('index', {animals: fetched_animals});
      }
    })
  },
  createPage: function(req, res) {
    res.render('new')
  },
  create: function(req, res) {
    var animal = new Animal(req.body);
    animal.save(function(err){
      if(err){
        console.log('There are errors before saving animal');
        res.render('new',{errors: animal.errors})
      } else {
        console.log('successful saved animal in DB');
        res.redirect('/')
      }
    })
  },
  showOne: function(req, res){
    console.log(req.params.one_id,  "going to update////////////////");
    console.log(req.params.one_id);
    // var animal = new Animal(req.body);

    Animal.find({ _id: req.params.one_id }, function(err, animal) {
      console.log(animal);
      // console.log(typeof(animal));
      res.render('show', {animal: animal})
    });
  },
  editing: function(req, res){
    console.log(req.params.edit_id, 'this is the id you passed');
    Animal.find({ _id: req.params.edit_id }, function(err, animal) {
    console.log(animal);
    res.render('new', {animal: animal})
    });
  },
  editSubmit: function(req,res){
  Animal.update({ _id: req.params.n },{name: req.body.name, description: req.body.description},function(err,animal){
    console.log('successful updated animal in DB');
    res.redirect('/')
  })
  },
  destroy: function(req,res){
    Animal.remove({ _id: req.params.id }, function(err, animal) {
      console.log(animal);
      res.redirect('/')
    })
  }
}





















//
