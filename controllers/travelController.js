//CONTROLLER
var express = require("express");
var path = require('path');
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var travellerObj = require("../models/travellers.js");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/create", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/user.html"));
});

// Create all our routes and set up logic within those routes where required.
router.get("/data", function (req, res) {
  travellerObj.traveller.all(function (data) {
    console.log(data.length);
    res.json({ traveller: data });
  });
});
//   travellers.all(function(data) {
//     console.log(data.length);
//     res.json({ traveller: data });
//   });


router.post("/api/travellerData", function (req, res) {
  console.log(req.body)
  travellerObj.traveller.create1([
    "USERNAME",
  ],
    [req.body.USERNAME,]
    , function (result) {
      // Send back the ID of the new quote
      //MAY GET ERROR , IF SO UPDATE
      res.json({ id: result.insertId });
    })

});

router.post("/api/travellerData", function (req, res) {
  console.log(req.body)
  travellerObj.travellerAttr.create2([
    "ATTR_NAME",
    "CITY",
    "STATE",
    "COUNTRY",
  ],
    [req.body.ATTR_NAME, req.body.CITY, req.body.STATE, req.body.USER_COUNTRY,
    ], function (result) {
      // Send back the ID of the new quote
      //MAY GET ERROR , IF SO UPDATE
      res.json({ id: result.insertId });
    })

});

router.put("/api/travellerData/:ID", function (req, res) {
  var condition = "ID= " + req.params.ID;

  console.log("condition", condition);

  travellerObj.travellerAttr.update2({
    ATTR_NAME: req.body.ATTR_NAME,
    CITY: req.body.CITY,
    STATE: req.body.STATE,
    COUNTRY: req.body.COUNTRY,

  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/travellerData/:ID", function (req, res) {
  var condition = "ID= " + req.params.id;

  travellerObj.travellerAttr.delete2(condition, function (result) {
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
