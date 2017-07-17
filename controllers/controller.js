//app/routes.js

var bodyParser = require('body-parser');

var User = require("../models/user.js");
var path = require('path');
var userID = 0;
var request = require("request");


module.exports = function (app, passport) {

    //home page
    app.get('/', function (req, res) {
        res.render("onboard");
    });

    //show login form
    app.get('/signin', function (req, res) {
        res.render("signin", {message: req.flash('loginMessage')});
    });

    app.post('/signin', passport.authenticate('local-login', {failureRedirect: '/signin', failureFlash: true}),
        function (req, res) {
            userID = req.user._id;
            res.redirect("/trade");
        });
    //proess the login form
    //app.post('/signin', do passport stuff here)

    //show signup form
    app.get('/signup', function (req, res) {
        res.render('signup', {message: req.flash('signupMessage')});
    });

    //process signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/trade',
        failureRedirect: '/signup',
        failureFlash: true
    }));
//show transaction page
//show trade page

    app.get('/transactions', isLoggedIn, function(req,res){

        var userCoins = [
            {
                name: "USD",
                amount: 0
            },
            {
                name: "BTC",
                amount: 0
            }, {
                name: "ETH",
                amount: 0
            }];

        var marketCoins = [
            {
                name: "BTC",
                value: 0
            },{
                name: "ETH",
                value: 0
            }];

        User.findOne({_id: userID}, function (err, user) {
            console.log(user);
            userCoins[0].amount = user.local.USD;
            userCoins[1].amount = user.local.BTC;
            userCoins[2].amount = user.local.ETH;

            var userInfo = {
                userName: user.local.username,
                firstName: user.local.name,
                lastName: user.local.lastname,
                pictureURL: user.local.picture
            };
            console.log("eth",user.ETH);

            res.render("transactions", {
                userCoins: userCoins,
                user: req.user
            });
        });
    });


    app.get('/profile', isLoggedIn, function(req,res){
        console.log("GOT IT WOOO"+userID);

        res.render("profile", {
            user: req.user
        });
    });


    app.post('/profile/username', function (req,res) {

        var usernamefull = req.body.fname + req.body.lname;
        var nameuser = req.body.fname;
        var lastnuser = req.body.lname;
        var pic = req.body.pictureuser;

        User.findOne({_id: userID}, function (err, user) {
            user.local.name = nameuser;
            user.local.lastName = lastnuser;
            user.local.username = usernamefull;
            user.local.picture = pic;
            user.save(function (err) {
                if (err) {
                    console.error('ERROR!');
                }
                res.redirect('/profile');
            });
        });
    });

    app.post('/profile/addmoney', function (req,res) {

        var money = req.body.addmoney;
        var numMoney = parseInt(money);

        User.findOne({_id: userID}, function (err, user) {

            var old = user.local.USD;
            var total = numMoney + old;

            user.local.USD = total;
            user.save(function (err) {
                if (err) {
                    console.error('ERROR!');
                }
                res.redirect('/profile');
            });
        });
    });

//show trade page
    app.get('/trade', isLoggedIn, function (req, res) {

        var userCoins = [
            {
                name: "USD",
                amount: 0
            },
            {
                name: "BTC",
                amount: 0
            }, {
                name: "ETH",
                amount: 0
            }];

        var marketCoins = [
            {
                name: "Bitcoin (BTC)",
                value: 0
            },{
                name: "Ethereum (ETH)",
                value: 0
            }];

        request({
            method: 'POST',
            url: 'https://api.coinigy.com/api/v1/ticker',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
        },
        body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BTC/USD\"}"
        }, function (error, response, body) {
            var temp = JSON.parse(body);
            marketCoins[0].value = parseFloat(temp.data[0].last_trade).toFixed(2);

            request({
                method: 'POST',
                url: 'https://api.coinigy.com/api/v1/ticker',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
            },
            body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"ETH/USD\"}"
            }, function (error, response, body) {
                var temp = JSON.parse(body);
                marketCoins[1].value = parseFloat(temp.data[0].last_trade).toFixed(2);

                User.findOne({_id: userID}, function (err, user) {
                    console.log(user);
                    userCoins[0].amount = user.local.USD;
                    userCoins[1].amount = user.local.BTC;
                    userCoins[2].amount = user.local.ETH;

                    var userInfo = {
                        userName: user.local.username,
                        firstName: user.local.name,
                        lastName: user.local.lastname,
                        pictureURL: user.local.picture
                    };
                    console.log("eth",user.ETH);

                    res.render("trade", {
                        marketCoins: marketCoins,
                        userCoins: userCoins,
                        user: req.user
                    });
                });
            });
        });
    });


    app.post('/trade/buycoin', function (req, res) {

        var coinprice = req.body.coins;
        var howmany = req.body.quantities;
        var currency = req.body.crypto;

        console.log(currency + ' rs ==================>> ' + howmany);

        req.flash('success', 'No enough money on your Wallet! Please add !');

        User.findOne({_id: userID}, function (err, user, done) {




            var old = user.local.USD;
            if (old > coinprice || old == coinprice) {
                var total = old - coinprice;
                user.local.USD = total;
                user.save(function (err) {
                    if (err) {
                        console.error('ERROR!');
                    }
                    res.redirect('/trade');
                });
            } else if (old < coinprice) {
                res.render('profile', {tradebuycoin: req.flash('success'),
                    user : req.user});
            }
        })
    });

        //logout
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/database', function (req, res) {

        res.sendFile(path.join(__dirname + "/../db/database.json"))
    });

    app.get('/livedata', isLoggedIn, function(req,res){

        var marketCoins = {
            timestamp: 0,
            coins: [{
                name: "BTC",
                value: 0
            },{
                name: "ETH",
                value: 0
            }]
        };

        request({
            method: 'POST',
            url: 'https://api.coinigy.com/api/v1/ticker',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
        },
        body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BTC/USD\"}"
        }, function (error, response, body) {
            var temp = JSON.parse(body);
            marketCoins.coins[0].value = parseFloat(temp.data[0].last_trade).toFixed(2);

            request({
                method: 'POST',
                url: 'https://api.coinigy.com/api/v1/ticker',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
            },
            body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"ETH/USD\"}"
        }, function (error, response, body) {
                var parsedBody = JSON.parse(body);
                marketCoins.coins[1].value = parseFloat(parsedBody.data[0].last_trade).toFixed(2);
                marketCoins.timestamp = Date.parse(temp.data[0].timestamp);
                res.send(JSON.stringify(marketCoins));
            });
        });

        
    });

};


function isLoggedIn(req, res, next) {
    //if authenticated
    if (req.isAuthenticated()) return next();

    res.redirect('/');
}

function generateGraph(){

}

// var express = require("express");
// var router = express.Router();
// var model = require("../models/models.js");

// router.get("/", function(req, res) {
//     res.render("trade", {cryptocoins: model.cryptocoins.getData()});
// //   cat.all(function(data) {
// //     var hbsObject = {
// //       cats: data
// //     };
// //     console.log(hbsObject);
// //     res.render("index", hbsObject);
// //   });
// });

// router.post("/", function(req, res) {
// //   cat.create([
// //     "name", "sleepy"
// //   ], [
// //     req.body.name, req.body.sleepy
// //   ], function() {
// //     res.redirect("/");
// //   });
// });

// router.put("/:id", function(req, res) {
// //   var condition = "id = " + req.params.id;

// //   console.log("condition", condition);

// //   cat.update({
// //     sleepy: req.body.sleepy
// //   }, condition, function() {
// //     res.redirect("/");
// //   });
// });

// router.delete("/:id", function(req, res) {
// //   var condition = "id = " + req.params.id;

// //   cat.delete(condition, function() {
// //     res.redirect("/");
// //   });
// });

// // Export routes for server.js to use.
// module.exports = router;