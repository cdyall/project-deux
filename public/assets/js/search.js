  alert("hey");
  
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
      var state= $("<h4>").html(travelsearch.State);
      var country = $("<h4>").html(travelsearch.Country);
      $CitySearchDiv.append(city);
      $CitySearchDiv.append(attraction);
      $CitySearchDiv.append(state);
      $CitySearchDiv.append(country);
      $("#attrlist").append(country);
      
    };
  });
})