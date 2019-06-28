// Import MySQL connection.
var connection = require("../config/connection.js");

leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
  var queryString = "SELECT ?? FROM ?? AS tOne";
  queryString += " LEFT JOIN ?? AS tTwo";
  queryString += " ON tOne.?? = tTwo.??";

  console.log(queryString);

  connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
    err,
    result
  ) {
    if (err) throw err;
    console.log(result);
  });
}
};