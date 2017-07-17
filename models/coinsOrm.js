/**
 * Created by nathanielellsworth on 7/13/17.
 */
/**
 * List Accounts:
 *
 * Returns a list of your attached exchange accounts and wallets, each with a unique auth_id.
 */

var request = require('request');

module.exports = {

    appAccounts: function ( callback ) {

        // Make a request to get accounts from remote service
        request({
            method: 'POST',
            url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/accounts',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
            }

        }, function (err, response, body) {
            callback(body);
        });

    },

    /**
     * List Balances:
     *
     * Returns a combined list of balances for all accounts, or specificied auth_ids
     */


    appBalances: function ( callback ) {

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
                callback(body);
            });
    },


    /**
     * Balance History
     *
     * Returns balances for your entire account on given date
     */


    appBalanceHistory: function ( callback ) {

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

            callback(body);

        });
    },


    /**
     * List Orders
     *
     * Returns a list of all open orders and recent order history
     */



    appOrders: function ( callback ) {

        request({
            method: 'POST',
            url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/orders',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
            }
        }, function (error, response, body) {

            callback(body);

        });
    },



    /**
     * List Alerts
     *
     * Returns a list of all open alerts and recent alert history
     */


    appAlerts: function ( callback ) {

        request({
            method: 'POST',
            url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/alerts',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
            }
        }, function (error, response, body) {

            callback(body);

        });
    },



    /**
     * Watch List
     *
     * Returns ticker data on your favorite markets (as selected on Coinigy.com)
     */


    appUserWatchList: function ( callback ) {

        request({
            method: 'POST',
            url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/userWatchList',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
            }
        }, function (error, response, body) {

            callback(body);

        });
    },



    /**
     * List News Articles
     *
     * Returns a list of the latest items from Coinigy's newsfeed sources
     */


    appNewsFeed: function ( callback ) {

        request({
            method: 'POST',
            url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/newsFeed',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
            }
        }, function (error, response, body) {

            callback(body);

        });
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




    appUpdateUser: function ( callback ) {

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

            callback(body);

        });
    },


    /**
     * Save Notification Preferences
     *
     * Update your notification preferences (alerts, trades, balances) via (email, sms)
     */


    appSavePrefs: function ( callback ) {

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

            callback(body);

        });
    },




    /**
     * Update Tickers
     *
     * Update your favorite markets/tickers based on exch_mkt_id
     */


    appUpdateTickers: function ( callback ) {

        request({
            method: 'POST',
            url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/updateTickers',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
            },
            body: "{  \"exch_mkt_ids\": \"7435,3401,3373,3385,6748,132,1146,363\",}"
        }, function (error, response, body) {

            callback(body);

        });
    },





    /**
     * List Order Types
     *
     * Returns a list of supported order and price types
     */




    appOrderTypes: function ( callback ) {

        request({
            method: 'POST',
            url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/orderTypes',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
            }
        }, function (error, response, body) {

            callback(body);

        });
    },



    /**
     * Refresh Balance
     *
     * Refresh balances on specified auth_id
     */






    appRefreshBalance: function ( callback ) {

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

            callback(body);

        });
    },



    /**
     * Add Alert
     *
     * Add a new price alert
     */




    appAddAlert: function ( callback ) {

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

            callback(body);

        });
    },


    /**
     * Delete Alert
     *
     * Delete existing price alert
     */


    appDeleteAlert: function ( callback ) {

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

            callback(body);

        });
    },



    /**
     * Add Order
     *
     * Create a new exchange order. Returns internal_order_id upon success.
     */




    appAddOrder: function ( callback ) {

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

            callback(body);

        });
    },


    /**
     * Cancel Order
     *
     * Cancel an outstanding exchange order
     */



    appCancelOrder: function ( callback ) {

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

            callback(body);

        });
    },





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



    appListExchanges: function ( callback ) {

        request({
            method: 'POST',
            url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/exchanges',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '521067f8f47ebe8aaf96bb3e2b7a3d38',
                'X-API-SECRET': '8cfc0cbcdb10ec968a59ab3a9cb16e9b'
            }
        }, function (error, response, body) {

            callback(body);

        });
    },








    /**
     * List Markets
     *
     * Returns a list of markets on specified exchange
     */



    appListMarkets: function ( callback ) {

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

            callback(body);

        });
    },







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




    appDataHistory: function ( callback ) {

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

            callback(body);

        });
    },





    /**
     * data {type:asks}
     *
     */



    appDataAsk: function ( callback ) {

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

            callback(body);

        });
    },





    /**
     * data {type:bids}
     *
     */




    appDataBids: function ( callback ) {

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

            callback(body);

        });
    },




    /**
     * data {type:orders}
     *
     */




    appDataOrders: function ( callback ) {

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

            callback(body);

        });
    },




    /**
     * data {type:all}
     *
     */






    appDataAll: function ( callback ) {

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

            callback(body);

        });
    },







    /**
     * Price Ticker
     *
     * Returns last, high (24h), low (24h), ask, bid for specified market
     */




    appDataTicker: function ( callback ) {

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

            callback(body);

        });
    },




    /**
     * Add API Key
     *
     * Add a new Exchange API Key to your account. Returns newly-generated auth_id in "data" block. After adding
     * a new key, it must still be both activated (/activateApiKey) and activated for trading (/activateTradingKey).
     */



    appAddAPIKey: function ( callback ) {

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

            callback(body);

        });
    }






};
