var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

///-----------------------------
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose_route_setup.js');                     //*****     1     // only from config
// store the function in a variable


// store the function in a variable
var routes_setter = require('./server/config/routes.js');              //*****     2      // only from config
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)



app.listen(8000, function() {
    console.log("listening on port 8000");
})
