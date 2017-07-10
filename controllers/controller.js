var express = require("express");
var router = express.Router();
var model = require("../models/models.js");

router.get("/", function(req, res) {
    res.render("onboard", {cryptocoins: model.cryptocoins.getData()});

//   cat.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
});
router.get("/", function(req, res) {
    res.render("transactions", {cryptocoins: model.cryptocoins.getData()});

//   cat.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
});

router.post("/", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function() {
//     res.redirect("/");
//   });
});

router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function() {
//     res.redirect("/");
//   });
});

router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function() {
//     res.redirect("/");
//   });
});

// Export routes for server.js to use.
module.exports = router;
