$(document).ready(function () {

  //variable for restaurants; make an array [" "]
  var restaurants = [""];

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

      // console.log(queryURL);
      console.log(response);

      //Looping over every result item
      var results = response.places_results;
      for (var i = 0; i < results.length; i++) {

        // Create the  list group to contain the articles and add the article content for each
        var $restaurantList = $("<ul>");
        $restaurantList.addClass("list-group");

        // Add the newly created element to the DOM
        $("#restaurant-section").append($restaurantList);

        // If the article has a headline, log and append to $articleList
        var title = results[i].title;
        var pTitle = $("<li>").text("Name: " + title);
        pTitle.addClass("list-group-item title");
        $restaurantList.append(pTitle);

        //address
        var address = results[i].address;

        var pAddress = $("<h5>").text("Address: " + address);
        pAddress.addClass("pAddress");
        $restaurantList.append(pAddress);

        //link
        var link = results[i].link;

        var pLink = $("<a href>").text("Link: " + link);
        pLink.addClass("pLink");
        $restaurantList.append(pLink);

        //phone number
        var phone = results[i].phone;

        var pPhone = $("<h5>").text("Phone Number: " + phone);
        pPhone.addClass("pPhone");
        $restaurantList.append(pPhone);
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


});
