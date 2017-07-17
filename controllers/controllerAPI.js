var path = require('path');


module.exports = function(app, passport){

    var orm = require('../models/coinsOrm.js');

    var request = require('request');

    var parallel = require('run-parallel');

    //home page

    app.get('/test', function(req,res) {


        /**
         * List Accounts:
         *
         * Returns a list of your attached exchange accounts and wallets, each with a unique auth_id.
         */
        var appAccountsData = {};
        orm.appAccounts(function myCallback(data) {
            appAccountsData = data;
        });


        /**
         * List Balances:
         *
         * Returns a combined list of balances for all accounts, or specificied auth_ids
         */
        var appBalancesData = {};
        orm.appBalances( function myCallback(data) {
            appBalancesData = data;
        });


        /**
         * Balance History:
         *
         * Returns balances for your entire account on given date
         */
        var appBalanceHistoryData = {};
        orm.appBalanceHistory( function myCallback(data) {
            appBalancesData = data;
        });


        /**
         * List Orders:
         *
         * Returns a list of all open orders and recent order history
         */
        var appOrderData = {};
        orm.appOrders( function myCallback(data) {
            appOrderData = data;
        });


        /**
         * List Alerts:
         *
         * Returns a list of all open alerts and recent alert history
         */
        var appAlertsData = {};
        orm.appAlerts( function myCallback(data) {
            appAlertsData = data;
        });


        /**
         * Update User Data
         *
         * Update your account information on record
         */
        var appUpdateUserData = {};
        orm.appUpdateUser( function myCallback(data) {
            appUpdateUserData = data;
        });


        /**
         * Watch List
         *
         * Returns ticker data on your favorite markets (as selected on Coinigy.com)
         */
        var appUserWatchListData = {};
        orm.appUserWatchList( function myCallback(data) {
            appUserWatchListData = data;
        });


        /**
         * List News Articles
         *
         * Returns a list of the latest items from Coinigy's newsfeed sources
         */
        var appNewsFeedData = {};
        orm.appNewsFeed( function myCallback(data) {
            appNewsFeedData = data;
        });


        /**
         * Save Notification Preferences
         *
         * Update your notification preferences (alerts, trades, balances) via (email, sms)
         */
        var appSavePrefsData = {};
        orm.appSavePrefs( function myCallback(data) {
            appSavePrefsData = data;
        });


        /**
         * Update Tickers
         *
         * Update your favorite markets/tickers based on exch_mkt_id
         */
        var appUpdateTickersData = {};
        orm.appUpdateTickers( function myCallback(data) {
            appUpdateTickersData = data;
        });


        /**
         * List Order Types
         *
         * Returns a list of supported order and price types
         */
        var appOrderTypesData = {};
        orm.appOrderTypes( function myCallback(data) {
            appOrderTypesData = data;
        });


        /**
         * Refresh Balance
         *
         * Refresh balances on specified auth_id
         */
        var appRefreshBalanceData = {};
        orm.appRefreshBalance( function myCallback(data) {
            appRefreshBalanceData = data;
        });


        /**
         * Add Alert
         *
         * Add a new price alert
         */
        var appAddAlertData = {};
        orm.appAddAlert( function myCallback(data) {
            appAddAlertData = data;
        });


        /**
         * Delete Alert
         *
         * Delete existing price alert
         */
        var appDeleteAlertData = {};
        orm.appDeleteAlert( function myCallback(data) {
            appDeleteAlertData = data;
        });


        /**
         * Add Order
         *
         * Create a new exchange order. Returns internal_order_id upon success.
         */
        var appAddOrderData = {};
        orm.appAddOrder( function myCallback(data) {
            appAddOrderData = data;
        });


        /**
         * Cancel Order
         *
         * Cancel an outstanding exchange order
         */
        var appCancelOrderData = {};
        orm.appCancelOrder( function myCallback(data) {
            appCancelOrderData = data;
        });


        /**
         * List Exchanges
         *
         * Returns a list of all supported exchanges
         */
        var appListExchangesData = {};
        orm.appListExchanges( function myCallback(data) {
            appListExchangesData = data;
        });



        /**
         * List Markets
         *
         * Returns a list of markets on specified exchange
         */
        var appListMarketsData = {};
        orm.appListMarkets( function myCallback(data) {
            appListMarketsData = data;
        });


        /**
         * data {type:history}
         *
         */
        var appDataHistoryData = {};
        orm.appDataHistory( function myCallback(data) {
            appDataHistoryData = data;
        });


        /**
         * data {type:asks}
         *
         */
        var appDataAskData = {};
        orm.appDataAsk( function myCallback(data) {
            appDataAskData = data;
        });


        /**
         * data {type:bids}
         *
         */
        var appDataBidsData = {};
        orm.appDataBids( function myCallback(data) {
            appDataBidsData = data;
        });


        /**
         * data {type:orders}
         *
         */
        var appDataOrdersData = {};
        orm.appDataOrders( function myCallback(data) {
            appDataOrdersData = data;
        });


        /**
         * data {type:all}
         *
         */
        var appDataAllData = {};
        orm.appDataAll( function myCallback(data) {
            appDataAllData = data;
        });


        /**
         * Price Ticker
         *
         * Returns last, high (24h), low (24h), ask, bid for specified market
         */
        var appDataTickerData = {};
        orm.appDataTicker( function myCallback(data) {
            appDataTickerData = data;
        });

        setTimeout(function () {

            //console.log(appDataTickerData);

            var tickerData = JSON.parse(appDataTickerData)[0];

            var moreData = tickerData.data[0];

            var market = moreData.market;

            //console.log(moreData.market);

            //var market = appDataTickerData.data[0].market;
            //console.log(appDataTickerData);

            res.render("home", {

                // {{{accounts}}}
                accounts : appAccountsData,

                // {{{balances}}}
                balances : appBalancesData,

                // {{{balanceHistory}}}
                balanceHistory : appBalanceHistoryData,

                // {{{order}}}
                order : appOrderData,

                // {{{alert}}}
                alert : appAlertsData,

                // {{{UserWatchList}}}
                UserWatchList : appUserWatchListData,

                // {{{NewsFeed}}}
                NewsFeed : appNewsFeedData,

                // {{{UpdateUser}}}
                UpdateUser : appUpdateUserData,

                // {{{SavePrefs}}}
                SavePrefs : appSavePrefsData,

                // {{{UpdateTickers}}}
                UpdateTickers : appUpdateTickersData,

                // {{{OrderTypes}}}
                OrderTypes : appOrderTypesData,

                // {{{RefreshBalance}}}
                RefreshBalance : appRefreshBalanceData,

                // {{{AddAlert}}}
                AddAlert : appAddAlertData,

                // {{{DeleteAlert}}}
                DeleteAlert : appDeleteAlertData,

                // {{{AddOrder}}}
                AddOrder : appAddOrderData,

                // {{{CancelOrder}}}
                CancelOrder : appCancelOrderData,

                // {{{ListExchanges}}}
                ListExchanges : appListExchangesData,

                // {{{ListMarkets}}}
                ListMarkets : appListMarketsData,

                // {{{DataHistory}}}
                DataHistory : appDataHistoryData,

                // {{{DataAsk}}}
                DataAsk : appDataAskData,

                // {{{DataBids}}}
                DataBids : appDataBidsData,

                // {{{DataOrders}}}
                DataOrders : appDataOrdersData,

                // {{{DataAll}}}
                DataAll : appDataAllData,

                // {{{DataTicker}}}
                DataTicker : appDataTickerData,

                // {{{market}}}
                market : market

            });

        }, 4000);

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

    app.post('/profile', function (req,res) {
        // console.log(req.body.email + '  ' +  req.body.pwd);
        // console.log(req.body.fname + '  ' +  req.body.lname);
        // console.log(req.body.avatar-2);

        res.render("profile");
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
