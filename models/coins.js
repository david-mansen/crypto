var express = require('express');
var app = express.Router();
var path = require('path');
var request = require('request');
var Gdax = require('gdax');

//=======================
var LIMIT = 400;
var SOCKET_COUNT = 0;
//=======================

var orm = {



    /**
     * This is the websocket logging every 400th data point
     */


    appWebSocket: function () {
        app.get("/WebSocket", function (req, res) {

            request({


                websocket: Gdax.WebsocketClient(['BTC-USD', 'ETH-USD']);
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

            }, function (err, response, body) {


                res.render('Response:', body);
            });


        }
        })

    },



    /**
     * List Accounts:
     *
     * Returns a list of your attached exchange accounts and wallets, each with a unique auth_id.
     */




    appAccounts: function () {
        app.get("/Accounts", function (req, res) {

            request({
                method: 'POST',
                url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/accounts',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
                }

            }, function (err, response, body) {


                res.render('Response:', body);
            });
        })
    },



    /**
     * List Balances:
     *
     * Returns a combined list of balances for all accounts, or specificied auth_ids
     */




    appBalances: function () {
        app.get("/Balances", function (req, res) {

            request({
                method: 'POST',
                url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/balances',
                headers: {
                    'Content-Type': 'application/json,application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
                },
                body: "{  \"show_nils\": 0,  \"auth_ids\": \"\"}"
            }, function (error, response, body) {

                res.render('Response:', body);
            });
        })
    },



    /**
     * Balance History
     *
     * Returns balances for your entire account on given date
     */




    appBalanceHistory: function () {
        app.get("/BalanceHistory", function (req, res) {

            request({
                method: 'POST',
                url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/balanceHistory',
                headers: {
                    'Content-Type': 'application/json,application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
                },
                body: "{  \"date\": \"2016-07-01\"}"
            }, function (error, response, body) {

                res.render('Response:', body);
            });
        })
    },



    /**
     * List Orders
     *
     * Returns a list of all open orders and recent order history
     */




    appOrders: function () {
        app.get("/Orders", function (req, res) {

            request({
                method: 'POST',
                url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/orders',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
                }
            }, function (error, response, body) {

                res.render('Response:', body);
            });
        })
    },



    /**
     * List Alerts
     *
     * Returns a list of all open alerts and recent alert history
     */




    appAlerts: function () {
        app.get("/Orders", function (req, res) {

            request({
                method: 'POST',
                url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/alerts',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
                }
            }, function (error, response, body) {

                res.render('Response:', body);
            });
        })
    },



    /**
     * Watch List
     *
     * Returns ticker data on your favorite markets (as selected on Coinigy.com)
     */




    appUserWatchList: function () {
        app.get("/Orders", function (req, res) {

            request({
                method: 'POST',
                url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/userWatchList',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
                }
            }, function (error, response, body) {

                res.render('Response:', body);
            });
        })
    },



    /**
     * List News Articles
     *
     * Returns a list of the latest items from Coinigy's newsfeed sources
     */




    appNewsFeed: function () {
        app.get("/NewsFeed", function (req, res) {

            request({
                method: 'POST',
                url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/newsFeed',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
                }
            }, function (error, response, body) {

                res.render('Response:', body);
            });
        })
    },




//********************************************************************************************************

    /**
     * Account Functions
     *
     * Private account methods - place alerts, orders, refresh balances
     */

//********************************************************************************************************




    /**
     * Update User Data
     *
     * Update your account information on record
     */




    appUpdateUser: function () {
        app.get("/UpdateUser", function (req, res) {

            request({
                method: 'POST',
                url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/updateUser',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
                },
                body: "{  \"first_name\": \"John\",  \"last_name\": \"Doe\",  \"company\": \"Blockchain Inc\",  \"phone\": \"+1-414-555-1212\",  \"street1\": \"123 Main St\",  \"street2\": \"Suite 1\",  \"city\": \"Milwaukee\",  \"state\": \"WI\",  \"zip\": \"53226\",  \"country\": \"US\"}"
            }, function (error, response, body) {

                res.render('Response:', body);
            });
        })
    },



    /**
     * Save Notification Preferences
     *
     * Update your notification preferences (alerts, trades, balances) via (email, sms)
     */




    appSavePrefs: function () {
        app.get("/SavePrefs", function (req, res) {

            request({
                method: 'POST',
                url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/savePrefs',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
                },
                body: "{  \"alert_email\": 1,  \"alert_sms\": 0,  \"trade_email\": 1,  \"trade_sms\": 1,  \"balance_email\": 1}"
            }, function (error, response, body) {

                res.render('Response:', body);
            });
        })
    },



    /**
     * Update Tickers
     *
     * Update your favorite markets/tickers based on exch_mkt_id
     *
     * Working on fixing this code
     */




    appSavePrefs: function () {
        app.get("/SavePrefs", function (req, res) {

            request({
                method: 'POST',
                url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/savePrefs',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                    'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
                },
                body: "{  \"alert_email\": 1,  \"alert_sms\": 0,  \"trade_email\": 1,  \"trade_sms\": 1,  \"balance_email\": 1}"
            }, function (error, response, body) {

                res.render('Response:', body);
            });
        })
    },





    module.exports = orm;
















/**
 * Update Tickers
 *
 * Update your favorite markets/tickers based on exch_mkt_id
 *
 * Working on fixing this code
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/updateTickers',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "    {
\"exch_mkt_ids\": \"7435,3401,3373,3385,6748,132,1146,363\",
}"
}, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
});


/**
 * List Order Types
 *
 * Returns a list of supported order and price types
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/orderTypes',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    }
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * Refresh Balance
 *
 * Refresh balances on specified auth_id
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/refreshBalance',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"auth_id\": 1234}"
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * Add Alert
 *
 * Add a new price alert
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/addAlert',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"exch_code\": \"GDAX\",  \"market_name\": \"BTC/USD\",  \"alert_price\": 750.01,  \"alert_note\": \"This is an optional message\"}"
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * Delete Alert
 *
 * Delete existing price alert
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/deleteAlert',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"alert_id\": 69468}"
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * Add Order
 *
 * Create a new exchange order. Returns internal_order_id upon success.
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/addOrder',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"auth_id\": 1234,  \"exch_id\": 62,  \"mkt_id\": 125,  \"order_type_id\": 2,  \"price_type_id\": 3,  \"limit_price\": 755,  \"order_quantity\": 0.01}"
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * Cancel Order
 *
 * Cancel an outstanding exchange order
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/cancelOrder',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"internal_order_id\": 1234567}"
}, function (error, response, body) {

    console.log('Response:', body);
});


//********************************************************************************************************

/**
 * Market Data
 *
 * Access exchange and market data
 */

//********************************************************************************************************


/**
 * List Exchanges
 *
 * Returns a list of all supported exchanges
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/exchanges',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    }
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * List Markets
 *
 * Returns a list of markets on specified exchange
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/markets',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"exchange_code\": \"GDAX\"}"
}, function (error, response, body) {

    console.log('Response:', body);
});


//********************************************************************************************************

/**
 * Market Data
 *
 * Trade history, asks and bids for any supported exchange/market.
 */

//********************************************************************************************************


/**
 * data {type:history}
 *
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/data',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BTC/USD\",  \"type\": \"history\"}"
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * data {type:asks}
 *
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/data',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BTC/USD\",  \"type\": \"asks\"}"
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * data {type:bids}
 *
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/data',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BTC/USD\",  \"type\": \"bids\"}"
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * data {type:orders}
 *
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/data',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BTC/USD\",  \"type\": \"orders\"}"
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * data {type:all}
 *
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/data',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BTC/USD\",  \"type\": \"all\"}"
}, function (error, response, body) {

    console.log('Response:', body);
});


/**
 * Price Ticker
 *
 * Returns last, high (24h), low (24h), ask, bid for specified market
 */





var request = require('request');

request({
    method: 'POST',
    url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/ticker',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
        'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
    },
    body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BTC/USD\"}"
}, function (error, response, body) {

    console.log('Response:', body);
});






/**
 *********************************************************************************************************
 */







// //================================================================
//
// //         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
// //         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//
// //================================================================
//
//
// //=======================
// var LIMIT = 400;
// var SOCKET_COUNT = 0;
// //=======================
//
//
// //================================================================
//
// /**
//  * This is the websocket logging every 400th data point
//  */
//
// var Gdax = require('gdax');
// var websocket = new Gdax.WebsocketClient(['BTC-USD', 'ETH-USD']);
// websocket.on('message', function (data) {
//
//     if (SOCKET_COUNT !== LIMIT) {
//         SOCKET_COUNT++;
//         return;
//
//     } else {
//         //Do logic with data [log(data)]
//         console.log(data);
//
//         SOCKET_COUNT = 0;
//
//         return;
//     }
//
// });
//
// //================================================================
//
//
// //================================================================
//
// //  Below is the list of all API calls to and from the coinigy, the hosting API
//
// //  Calls can be made to make a mock account, which can be customized to trade,
//
// //  add a news feed, place bids, Look at transaction history, and much more
//
// //  http://docs.coinigy.apiary.io/#reference/account-data/account-info/userinfo
//
// //================================================================
//
//
// /**
//  * List Accounts:
//  *
//  * Returns a list of your attached exchange accounts and wallets, each with a unique auth_id.
//  */
//
//
// appFunction: app.get("/", function (req, res) {
//     var request = require('request');
//     request({
//         method: 'POST',
//         url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/accounts',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//             'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//         }
//     }, function (error, response, body) {
//         //console.log('Status:', response.statusCode);
//         //console.log('Headers:', JSON.stringify(response.headers));
//         //console.log('Response:', body);
//
//         res.render('Status:', response.statusCode);
//         res.render('Headers:', JSON.stringify(response.headers));
//         res.render('Response:', body);
//     });
// });









// /**
//  * List Balances:
//  *
//  * Returns a combined list of balances for all accounts, or specificied auth_ids
//  */
//
//
//
//
//
// var request = require('request');
//
// request({
//     method: 'POST',
//     url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/balances',
//     headers: {
//         'Content-Type': 'application/json,application/json',
//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//     },
//     body: "{  \"show_nils\": 0,  \"auth_ids\": \"\"}"
// }, function (error, response, body) {
//     //console.log('Status:', response.statusCode);
//     //console.log('Headers:', JSON.stringify(response.headers));
//     //console.log('Response:', body);
//
//     res.render('Status:', response.statusCode);
//     res.render('Headers:', JSON.stringify(response.headers));
//     res.render('Response:', body);
// });


// /**
//  * Balance History
//  *
//  * Returns balances for your entire account on given date
//  */
//
//
//
//
//
// var request = require('request');
//
// request({
//     method: 'POST',
//     url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/balanceHistory',
//     headers: {
//         'Content-Type': 'application/json,application/json',
//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//     },
//     body: "{  \"date\": \"2016-07-01\"}"
// }, function (error, response, body) {
//     console.log('Status:', response.statusCode);
//     console.log('Headers:', JSON.stringify(response.headers));
//     console.log('Response:', body);
// });



// /**
//  * List Orders
//  *
//  * Returns a list of all open orders and recent order history
//  */
//
//
//
//
//
// var request = require('request');
//
// request({
//     method: 'POST',
//     url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/orders',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//     }
// }, function (error, response, body) {
//
//     console.log('Response:', body);
// });
//
//
// /**
//  * List Alerts
//  *
//  * Returns a list of all open alerts and recent alert history
//  */
//
//
//
//
//
// var request = require('request');
//
// request({
//     method: 'POST',
//     url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/alerts',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//     }
// }, function (error, response, body) {
//
//     console.log('Response:', body);
// });


// /**
//  * Watch List
//  *
//  * Returns ticker data on your favorite markets (as selected on Coinigy.com)
//  */
//
//
//
//
//
// var request = require('request');
//
// request({
//     method: 'POST',
//     url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/userWatchList',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//     }
// }, function (error, response, body) {
//
//     console.log('Response:', body);
// });



// /**
//  * List News Articles
//  *
//  * Returns a list of the latest items from Coinigy's newsfeed sources
//  */
//
//
//
//
//
// var request = require('request');
//
// request({
//     method: 'POST',
//     url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/userWatchList',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//     }
// }, function (error, response, body) {
//
//     console.log('Response:', body);
// });



// //********************************************************************************************************
//
// /**
//  * Account Functions
//  *
//  * Private account methods - place alerts, orders, refresh balances
//  */
//
// //********************************************************************************************************



// /**
//  * Update User Data
//  *
//  * Update your account information on record
//  */
//
//
//
//
//
// var request = require('request');
//
// request({
//     method: 'POST',
//     url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/updateUser',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//     },
//     body: "{  \"first_name\": \"John\",  \"last_name\": \"Doe\",  \"company\": \"Blockchain Inc\",  \"phone\": \"+1-414-555-1212\",  \"street1\": \"123 Main St\",  \"street2\": \"Suite 1\",  \"city\": \"Milwaukee\",  \"state\": \"WI\",  \"zip\": \"53226\",  \"country\": \"US\"}"
// }, function (error, response, body) {
//
//     console.log('Response:', body);
// });





// /**
//  * Save Notification Preferences
//  *
//  * Update your notification preferences (alerts, trades, balances) via (email, sms)
//  */
//
//
//
//
//
// var request = require('request');
//
// request({
//     method: 'POST',
//     url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/savePrefs',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
//         'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
//     },
//     body: "{  \"alert_email\": 1,  \"alert_sms\": 0,  \"trade_email\": 1,  \"trade_sms\": 1,  \"balance_email\": 1}"
// }, function (error, response, body) {
//
//     console.log('Response:', body);
// });































//hook in more modules by requiring them
var model
.
exports = {

    app.get("/", function (req, res) {
    var request = require('request');
    request({
        method: 'POST',

    }, function (error, response, body) {
        //console.log('Status:', response.statusCode);
        //console.log('Headers:', JSON.stringify(response.headers));
        //console.log('Response:', body);

        res.render('Status:', response.statusCode);
        res.render('Headers:', JSON.stringify(response.headers));
        res.render('Response:', body);
    });
});


cryptocoins: require("./cryptocoins.js")(temp)


}
;
