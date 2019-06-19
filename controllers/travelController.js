//CONTROLLER
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var travellers = require("../models/travellers.js");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Create all our routes and set up logic within those routes where required.
router.get("/data", function(req, res) {
  travellers.all(function(data) {
    res.json({ traveller: data });
  });
});

router.post("/api/travellerData", function(req, res) {
  travellers.create([
    "USERNAME", 
    "CITY",
    "USER_PASSWORD",
    "COUNTRY",
    "ATTR_NAME",
  ], [
    req.body.USERNAME, req.body.CITY, req.body.USER_PASSWORD, req.body.USER_COUNTRY,req.body.ATTR_NAME 
  ], function(result) {
    // Send back the ID of the new quote
    //MAY GET ERROR , IF SO UPDATE
    res.json({ id: result.insertId });
  });
});

router.put("/api/travellerData/:ENTRY_ID", function(req, res) {
  var condition = "ENTRY_ID= " + req.params.ENTRY_ID;

  console.log("condition", condition);

  cat.update({
    USERNAME: req.body.USERNAME,
    CITY: req.body.CITY,
    USER_PASSWORD: req.body.USER_PASSWORD,
    COUNTRY: req.body.USER_COUNTRY,
    ATTR_NAME: req.body.ATTR_NAME,
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/travellerData/:ENTRY_ID", function(req, res) {
  var condition = "ENTRY_ID= " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
