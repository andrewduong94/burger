var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

//Serve static content for app from the "Public" directory
app.use(express.static("public"));

//parse app
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and give server access
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

//Start server to listen to client requests.
app.listen(PORT, function(){
    //Log when server has started
    console.log("Server listening on: http://localhost" + PORT);
});