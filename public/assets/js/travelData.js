// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $.ajax("/data", {
    type: "GET"
  }).then(function(data) {

    // var travel = data.traveller;
    var len = data.traveller.length;

    for (var i = 0; i < len; i++){

      var travel = data.traveller[i];
      console.log("why",travel);
    //  listCount = i + 1; 
      var $AttrDiv = $("<div>");
      $AttrDiv.addClass("col-sm-3");
      $("#attrlist").append($AttrDiv);
      var USER =  $("<h2>").html(travel[i].ID + " , " + travel[i].USERNAME);
      var Attraction = $("<h3>").html(travel[i].ATTR_NAME);
      var City = $("<h4>").html(travel[i].CITY);
      var State = $("<h4>").html(travel[i].STATE);
      var Country = $("<h4>").html(travel[i].COUNTRY);
      $AttrDiv.append(USER);
      $AttrDiv.append(Attraction);
      $AttrDiv.append(City);
      $AttrDiv.append(State);
      $AttrDiv.append(Country);
      $("#attrlist").append($AttrDiv);
    
    };
  });
})

  //     if (cats[i].sleepy) {
  //       new_elem += "SLEEP TIME!";
  //     } else {
  //       new_elem += "WAKE UP!";
  //     }

  //     Attraction += "</button>";

  //     new_elem +=
  //       "<button class='delete-cat' data-id='" +
  //       cats[i].id +
  //       "'>DELETE!</button></li>";

  //     if (cats[i].sleepy) {
  //       sleepyElem.append(new_elem);
  //     } else {
  //       nosleepyElem.append(new_elem);
  //     }
  //   }
  // });

  $(document).on("click", ".change-sleep", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
  $.ajax("/api/travellerData/" + id, {
    type: "PUT",
    data: updateAttr
  }).then(function() {
    console.log("changed sleep to", newSleep);
    // Reload the page to get the updated list
    location.reload("/create");
  });
});

$("#add-btn").on("submit", function (event){
  event.preventDefault();
  
  var newAttr = {
      USERNAME: $("#name") .val() .trim(),
      ATTR_NAME: $("#attr") .val() .trim(),
      CITY: $("#city") .val() .trim(),
      STATE: $("#state") .val() .trim(),
      COUNTY: $("#country") .val() .trim(),
      //COMMENTS: $("#COMM") .val() .trim(),
  }
  console.log(newAttr)
$.ajax("/api/travellerData",{
  type: "POST",
  data: newAttr, 

}).then (function(){
  console.log("create new attr");
  // Reload the page to get the updated list
  location.replace("/create");
})
})

  $(document).on("click", ".delete-cat", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted cat", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
