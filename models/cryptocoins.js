//test data before database connection
var testData = [
    {
        name: "bitcoin",
        value: 2400
    },
    {
        name: "ethereum",
        value: 200
    }
];


module.exports = function(temp){


	var cryptocoins = {
        getData: function(){
            return testData;
        }
    };
//   all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("cats", condition, function(res) {
//       cb(res);
//     });
//   }

    return cryptocoins;

}



