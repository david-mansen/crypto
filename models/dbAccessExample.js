//models/dbAccessExample.js

var mongoose = require('mongoose');

var plumbusSchema = mongoose.Schema({
    type: String,
    length: Number,
    design: {
        material: String,
        color: String
    }
});

//methods
plumbusSchema.methods.testPlumbus = function(){
    console.log("shleem");
}

//create model
module.exports = mongoose.model('Plumbus', plumbusSchema);




