
//app/routes.js
module.exports = function(app, passport){


    //home page
    app.get('/', function(req,res){
        res.render("onboard");
    });

    //show login form
    app.get('/signin', function(req,res){
        res.render("signin", {message: req.flash('loginMessage')});
    });

    app.post('/signin', passport.authenticate('local-login', {
        successRedirect : '/trade',
        failureRedirect: '/signin',
        failureFlash : true
    }));
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
    app.get('/transaction', isLoggedIn, function(req,res){
        res.render("transaction", {
            user: req.user
        });
    });



    app.get('/transactions', isLoggedIn, function(req,res){
        res.render("transactions", {
            user: req.user
        });
    });

    app.get('/profile', isLoggedIn, function(req,res){
        res.render("profile", {
            user: req.user
        });
    });

      
//show trade page
    app.get('/trade', isLoggedIn ,function(req,res){
        res.render("trade", {
            user: req.user
        });
    });

    //logout
    app.get('/logout', function(req,res){
        req.logout();
        res.redirect('/');
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
