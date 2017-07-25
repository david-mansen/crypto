//models/user.js

var mongoose = require('mongoose');

var sellTransactionsSchema = mongoose.Schema({
    userID      : String,
    currency    : String,
    amount      : Number,
    usdBalance  : Number
});

//create model
module.exports = mongoose.model('sellTransactions', sellTransactionsSchema);

