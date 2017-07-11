var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");



//=======================
var LIMIT = 400;
var SOCKET_COUNT = 0;
//=======================


var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

app.use("/", routes);

app.listen(port, function (req) {
    console.log("listening on port", port);
});






//================================================================

/**
 * This is the websocket logging every 400th data point
 */

var Gdax = require('gdax');
var websocket = new Gdax.WebsocketClient(['BTC-USD', 'ETH-USD']);
websocket.on('message', function (data) {

    if (SOCKET_COUNT !== LIMIT) {
        SOCKET_COUNT++;
        return;

    } else {
        //Do logic with data [log(data)]
        console.log(data);

        SOCKET_COUNT = 0;

        return;
    }

});

//================================================================





















//================================================================

//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'

//================================================================


// var request = require('request');
//
// request({
//     method: 'POST',
//     url: 'https://private-anon-eeda9002e5-coinigy.apiary-mock.com/api/v1/data',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//     },
//     body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BTC/USD\",  \"type\": \"asks\"}"
// }, function (error, response, body) {
//     console.log('Status:', response.statusCode);
//     console.log('Headers:', JSON.stringify(response.headers));
//     console.log('Response:', body);
// });


// var request = require('request');
//
// request({
//     method: 'POST',
//     url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/markets',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//     },
//     body: "{  \"exchange_code\": \"GDAX\"}"
// }, function (error, response, body) {
//     console.log('Status:', response.statusCode);
//     console.log('Headers:', JSON.stringify(response.headers));
//     console.log('Response:', body);
// });


