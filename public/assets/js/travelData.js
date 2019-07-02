$(function () {
  $.ajax("/data", {
    type: "GET"
  }).then(function (data) {

    // var travel = data.traveller;
    var travel = data.traveller;
    var len = data.traveller.length
    console.log("DUB", data);
    console.log("DUB2", data.traveller.length);
    for (var i = 0; i < len; i++) {

      var travel2 = data.traveller[i]
      console.log("why", travel2);
      listCount = i + 1;
      var $AttrDiv = $("<ul >");
      $AttrDiv.addClass("list-group");
      $("#attrlist").append($AttrDiv);
      var USER = travel[i].USERNAME;
      console.log("duh", travel[i].USERNAME);
      var $AttrDivList = $("<li class='list-group-item'>");


      if (USER) {
        $AttrDivList.append("<button class='delete' data-id='" +
          "<span class='label label-primary'>" +

          "</span>" + "</button>"
        );
      }

      if (USER) {
        $AttrDivList.append("<button class='update' data-id='" +
          "<span class='label label-primary'>" +

          "</span>" + "Update </button>"
        );
      }

      var Attraction = travel[i].ATTR_NAME;
      var City = travel[i].CITY
      var State = travel[i].STATE;
      if (State == undefined) {
        State = " ";
      }
      var Country = travel[i].COUNTRY;

      $AttrDivList.append("<h3>" + "USER: " + USER + "</h3>");
      $AttrDivList.append("<h5>" + "ATTRACTION: " + Attraction + "</h5>");
      $AttrDivList.append("<h5>" + "CITY: " + City + "</h5>");
      $AttrDivList.append("<h5>" + "STATE: " + State + "</h5>");
      $AttrDivList.append("<h5>" + "COUNTRY: " + Country + "</h5>");
      $("#attrlist").append($AttrDivList);



    };
  });

  // UPDATE BUTTON/CALL

  $(document).on("click", "update", function (event) {
    var id = $(this).data("id");
    var newupdate = $(this).data("update");

    var update = {
      attraction: newupdate,
      city: newupdate,
      state: newupdate,
      country: newupdate
    };

    // Send the PUT request.
    $.ajax("/api/travellerData/" + id, {
      type: "PUT",
      data: update
    }).then(function () {
      console.log("update to ", newupdate);
      // Reload the page to get the updated list
      location.replace("upload.html");
    });
  });

  // ADD BUTTON
  $("#add-btn").on("click", function (event) {
    event.preventDefault();
    var newAttr = {
      USERNAME: $("#name").val().trim(),
      ATTR_NAME: $("#attr").val().trim(),
      CITY: $("#city").val().trim(),
      STATE: $("#state").val().trim(),
      COUNTRY: $("#country").val().trim()
    };
    // Question: What does this code do??
    console.log(newAttr)
    $.ajax("/api/travellerData", {
      type: "POST",
      data: newAttr,
    }).then(function () {
      console.log("create new attr");
      // Reload the page to get the updated list
      location.replace("results2.html");
    });
  });

  // DELETE BUTTON/CALL
  $(".delete").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/travellerData/" + id, {
      type: "DELETE"
    }).then(function () {
      console.log("deleted ", id);
      // Reload the page to get the updated list
      location.reload();
    });

  });

  //SEARCH CALL
  $("#search").on("click", function (event) {
    event.preventDefault();

    $("#searchdump").empty();

    var citysearch = $("#search-term").val();

    $.ajax("/data/" + citysearch, {
      type: "GET"
    }).then(function (data) {
      var travelsearch = data.traveller;
      var len = data.traveller.length
      for (var i = 0; i < len; i++) {

        var $CitySearchDiv = $("<div>");
        $CitySearchDiv.addClass("col-sm-3");
        $("#attrlist").append($CitySearchDiv);
        var $CitySearchDiv = $("<div class='col-sm-3'>");
        var city = $("<h2>").html(travelsearch.City);
        var attraction = $("<h4>").html(travelsearch.Attraction);
        var state = $("<h4>").html(travelsearch.State);
        var country = $("<h4>").html(travelsearch.Country);
        $CitySearchDiv.append(city);
        $CitySearchDiv.append(attraction);
        $CitySearchDiv.append(state);
        $CitySearchDiv.append(country);
        $("#attrlist").append(country);

      };
    });
  })
})
