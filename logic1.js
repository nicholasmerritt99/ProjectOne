//variable for restaurants; make an array [" "]
var restaurants = [" "];

//function re-renders the html to display the appropriate content
function displayResInfo() {
  var food = $(this).attr("data-food");


  // API SerpWow.com API Playground 

  var queryURL = "https://api.serpwow.com/live/search?api_key=4BF181DC&q=" + restaurants + "&google_domain=google.com&location=Frisco,Texas,United+States&gl=us&hl=en&search_type=places"

  $.ajax({
    url: queryURL,
    method: "GET"
    // After data comes back from the request
    //function that adds info. from response to webpage
  }).then(function (response) {

    console.log(queryURL);
    console.log(response);

    //Looping over every result item
    var results = response.places_results;
    for (var i = 0; i < results.length; i++) {

      console.log(results);
      //creating a div for restaurant info.
      var restaurantDiv = $("<div>");
      restaurantDiv.addClass("restaurantDiv");


      //loops through all results for title
      var title = results[i].title;

      //appends title to div
      var pTitle = $("<p>").text("Title: " + title);
      pTitle.addClass("pTitle");
      restaurantDiv.append(pTitle);

      //address
      var address = results[i].address;

      var pAddress = $("<p>").text("Address: " + address);
      pAddress.addClass("pAddress");
      restaurantDiv.append(pAddress);

      //link
      var link = results[i].link;

      var pLink = $("<p>").text("Link: " + link);
      pLink.addClass("pLink");
      restaurantDiv.append(pLink);

      //phone number
      var phone = results[i].phone;

      var pPhone = $("<p>").text("Phone Number: " + phone);
      pPhone.addClass("pPhone");
      restaurantDiv.append(pPhone);

      //prepends all p /div's to webpage

      $(".title").prepend(restaurantDiv);

    }
  });

}
//on click associated with the search button on html
$("#add-food").on("click", function (event) {
  //prevent page from reloading on click
  event.preventDefault();
  //grabs text user put in  
  var food = $("#food-input").val().trim();
  //pushes value to restaurant array  
  restaurants.push(food);

});
//click event listener to all elements with the id "add-food"
$(document).on("click", "#add-food", displayResInfo);
