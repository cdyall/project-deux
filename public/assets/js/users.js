// sync Users
exports.syncUsers = functions.database
  .ref("/USERS/{USER_ID}")
  .onWrite(event => {
    // Grab the current value of what was written to the Realtime Database.
    var userId = event.params.USERS_ID;
    var eventSnapshot = event.data;
    // Exit when the data is deleted.
    if (!event.data.exists()) {
      console.log("DELETE User by Id:" + userId);
      var DELETE_USER_SQL = "DELETE FROM `USERS` where `USER_ID` = ?";
      var params = [userId];
      var connection;
      return mysql.createConnection(dbconfig).then(function(conn) {
        connection = conn;
        return connection.query(DELETE_USER_SQL, params);
      });
    }
    console.log("INSERT/UPDATE User by Id:" + userId);
    var INSERT_USER_SQL = "INSERT INTO `Users` (`USER_ID`, ) VALUES (?)";
    var params = [
      userId,
      eventSnapshot.child("EMAIL")
        ? eventSnapshot.child("EMAIL").val()
        : null
    ];
    return mysql.createConnection(dbconfig).then(function(conn) {
      connection = conn;
      return connection.query(INSERT_USER_SQL, params);
    });
  });
