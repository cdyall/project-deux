then(function (response) {
    var movieMax = 6
    for (var i = 0; i < movieMax; i++) {
      var movieInfo = response.Search[i];
      console.log(movieInfo);
      movieCount = i + 1;
      var $movieDiv = $("<div>");
      $movieDiv.addClass("col-sm-3");
      $("#searchdump").append($movieDiv);
      var $movieList = $("<div class='col-sm-3'>");
      var title = $("<h2>").html(response.Search[i].Title);
      var released = $("<h4>").html(response.Search[i].Year);
      var Image = $("<img>").attr("src", response.Search[i].Poster);
      $movieDiv.append(title);
      $movieDiv.append(released);
      $movieDiv.append(Image);
      $("#searchdump").append($movieDiv);
      
    };
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