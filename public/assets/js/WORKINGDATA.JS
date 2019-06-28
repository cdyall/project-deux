$(function() {
    $.ajax("/data", {
        type: "GET"
  }).then(function(data) {
    var cityElem = $("#cityData"); // list id for cities
    var userElem = $("#userData"); // list id for user data 
  
    var city = data.attr; //pull city data 
    var cLen = city.length;
  
    var country = data.attr; //pull country data 
  
    var state = data.attr; //pull country data 
   
  
    var user = data.attr;
    var uLen = user.length;
  
    //for loop for city 
    for (var i = 0; i < cLen; i++){
        var new_elem = 
        "<li>" + 
        city[i].city + 
        ", "+state[i].state +
        ", "+country[i].country +
        "<button class= 'update-city' data-id='" +
        city[i].city +
        "' data-newcity='" +
        !city[i].update +
        "'>";
  
      if (city[i].update) {mn 
        new_elem += "Update";
      } 
    //   else {
    //     new_elem += "WAKE UP!"; //error?
    //   }
  
      new_elem += "</button>";
  
      new_elem +=
        "<button class='delete-city' data-id='" +
        city[i].id +
        "'>DELETE!</button></li>";
  
      if (city[i].update) {
        cityElem.append(new_elem);
      } else {
        userElem.append(new_elem);
      }
    }
  });
  $(".field").on("button", function (event){
    event.preventDefault();
    var newAttr = {
        USERNAME: $("#name") .val() .trim(),
        ATTR_NAME: $("#attr") .val() .trim(),
        CITY: $("#city") .val() .trim(),
        STATE: $("#state") .val() .trim(),
        COUNTY: $("#country") .val() .trim(),
        //COMMENTS: $("#COMM") .val() .trim(),
    }
$.ajax("/api/travellerData",{
    type: "POST",
    data: newAttr, 
 
}).then (function(){
    console.log("create new attr");
    // Reload the page to get the updated list
    location.replace("/user");
})
})
});
