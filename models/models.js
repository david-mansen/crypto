// Import the ORM to create functions that will interact with the database.
var temp = 10;//require("../config/orm.js");

var models = {
    cryptocoins: require("./cryptocoins.js")(temp)
};

// Export the database functions for the controller (catsController.js).
module.exports = models;


