//test showing data can be passed into the submodules
var temp = 10;//require("../config/orm.js");

//hook in more modules by requiring them 
var models = {
    cryptocoins: require("./cryptocoins.js")(temp)
};

module.exports = models;


