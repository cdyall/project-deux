//model
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var traveller = {

  all: function (cb) {
    orm.all("USERS", "ATTR", "USERS.ID", "ATTR.USER_ID", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create1: function (cols, vals, cb) {
    orm.create1("USERS", cols, vals, function (res) {
      cb(res);
    });
  },
  update1: function (objColVals, condition, cb) {
    orm.update1("USERS", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete1: function (condition, cb) {
    orm.delete1("USERS", condition, function (res) {
      cb(res);
    });
  }
};


var travellerAttr = {

  // The variables cols and vals are arrays.
  create2: function (cols, vals, cb) {
    orm.create2("ATTR", cols, vals, function (res) {
      cb(res);
    });
  },
  update2: function (objColVals, condition, cb) {
    orm.update2("ATTR", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete2: function (condition, cb) {
    orm.delete2("ATTR", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = {
  traveller:traveller,
  travellerAttr:travellerAttr
}
