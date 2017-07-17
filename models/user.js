//models/user.js

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    local           : {
        email       : String,
        password    : String,
        USD         : Number,
        BTC         : Number,
        ETH         : Number,
        username    : String,
        name        : String,
        lastName    : String,
        picture     : String,
    }
});

//methods
//generate hash
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//check if password is valid
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
};


//create model
module.exports = mongoose.model('User', userSchema);

