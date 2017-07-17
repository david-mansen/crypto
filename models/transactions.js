//models/user.js

var mongoose = require('mongoose');

var transactionSchema = mongoose.Schema({
    userID      : String,
    currency    : String,
    type        : String,
    amount      : Number,
    price       : Number
});

//create model
module.exports = mongoose.model('Transaction', transactionSchema);

