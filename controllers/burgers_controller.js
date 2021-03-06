var express = require("express");
var router = express.Router();

//Import the model (burger.js) to use it's database functions 
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var allObject = {
            burgers: data
        };
        console.log("controller is running");
        res.render("index", allObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(data) {
        //Send back the ID of the new burger
        //res.json({ id: result.insertID });
        res.redirect('/');
    });
});

router.put("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        //devoured: req.body.devoured
        devoured: true
    }, condition, function(data) {
        //if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, 404
        //   return res.status(404).end();
        //} else {
        //    res.status(200).end();
        //}
        res.redirect('/');

    });
});

// Export routes for server.js to use
module.exports = router;