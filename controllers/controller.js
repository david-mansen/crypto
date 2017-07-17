//app/routes.js

var bodyParser = require('body-parser');

var User = require("../models/user.js");
var path = require('path');
var userID = 0;

module.exports = function(app, passport){

    //home page
    app.get('/', function(req,res){
        res.render("onboard");
    });

    //show login form
    app.get('/signin', function(req,res){
        res.render("signin", {message: req.flash('loginMessage')});
    });

    app.post('/signin', passport.authenticate('local-login', {failureRedirect : '/signin', failureFlash: true}),
    function(req,res){
        userID = req.user._id;
        res.redirect("/trade");
    });
    //proess the login form
    //app.post('/signin', do passport stuff here)

    //show signup form
    app.get('/signup', function(req,res){
        res.render('signup', {message: req.flash('signupMessage')});
    });

    //process signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/trade',
        failureRedirect : '/signup',
        failureFlash: true
    }));
//show transaction page
//show trade page

    app.get('/transactions', isLoggedIn, function(req,res){
        var userCoins = [
            {
                name:   "USD",
                amount: 1200
            },
            {
                name:   "Bitcoin",
                amount: 0.2323
            },{
                name:   "Ethereum",
                amount: 0.111
            },
            {
                name:   "AntShares",
                amount: 10000000
            }];

        res.render("transactions", {
            userCoins: userCoins,
            user: req.user
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
                res.render("profile", {
                    user: req.user
                });
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
                res.render("profile", {
                    user: req.user
                });
            });
        });
    });

//show trade page
    app.get('/trade', isLoggedIn ,function(req,res){

        var userCoins = [
            {
                name:   "USD",
                amount: 1200
            },
            {
                name:   "Bitcoin",
                amount: 0.2323
            },{
                name:   "Ethereum",
                amount: 0.111
            },
            {
                name:   "AntShares",
                amount: 10000000
            }];


        res.render("trade", {
            userCoins: userCoins,
            user: req.user
        });
    });

    //logout
    app.get('/logout', function(req,res){
        req.logout();
        res.redirect('/');
    });

    app.get('/database', function(req,res){

        res.sendFile(path.join(__dirname + "/../db/database.json"))
    });

};

function isLoggedIn(req,res,next){
    //if authenticated
    if(req.isAuthenticated()) return next();

    res.redirect('/');
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