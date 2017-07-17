//server.js
//Set up for tools
var express     = require("express");
var app         = express();
var port        = process.env.PORT || 3000;
var mongoose    = require("mongoose");
var passport    = require("passport");
var flash       = require("connect-flash");
var morgan          = require("morgan");
var cookieParser    = require("cookie-parser");
var bodyParser      = require("body-parser");
var session         = require("express-session");

var configDB = require("./config/database.js");

//configuration
//connect to database

mongoose.connect(configDB.url);

//pass passport for configuration
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({extended: false}));
//set up express
app.use(morgan("dev"));   //log every request to the console
app.use(cookieParser());    //read cookies needed for auth
app.use(bodyParser.urlencoded({ extended: false }));
//get infromation from html forms



// Set Handlebars view engine
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//required for passport
app.use(session({
    secret: 'authcookiesecret',
    name: 'authcookie',
    resave: false,
    saveUninitialized: true
})); //session secret

app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash());   //use connect-flash for flash messages stored in session

//public files
app.use(express.static("public"));


// Override with POST having ?_method=DELETE
//app.use(methodOverride("_method"));



/**
 * This is the websocket logging every 400th data point
 */


// //=======================
// var LIMIT = 400;
// var SOCKET_COUNT = 0;
// //=======================

// var Gdax = require('gdax');
// var websocket = new Gdax.WebsocketClient(['BTC-USD', 'ETH-USD']);
// websocket.on('message', function (data) {
//     if (SOCKET_COUNT !== LIMIT) {
//         SOCKET_COUNT++;
//         return;
//     } else {
//         //Do logic with data [log(data)]
//         console.log(data);
//         SOCKET_COUNT = 0;
//         return;
//     }
// });




// Import routes and give the server access to them.
var routes = require("./controllers/controller.js")(app, passport);
var APIroutes = require("./controllers/controllerAPI.js")(app, passport);


//app.use("/", routes);

app.listen(port, function (req) {
    console.log("listening on port", port);
});


        //res.render('Status:', response.statusCode);
        //res.render('Headers:', JSON.stringify(response.headers));
        //res.render('Response:', body)



