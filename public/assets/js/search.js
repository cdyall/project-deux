$("#results").on("click", function (event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
    $("#results").empty();
    // Here we grab the text from the input box
    var city = $("#result").val();
    
    
    // Here we construct our URL
  
    $.ajax({
      url: "/api/ATTR",
      method: "GET",
      success: function(city){
          $.each(city, function(i, attr){
            $city.append('<li>Name: '+  city.CITY +', Attraction:  '+ city.ATTR_NAME +'</li>');
          })
      }
    });
   
  });