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
      console.log(results)
      for (var i = 0; i < results.length; i++) {


        // Create the restaurant table to contain the restaurants and add the restaurant content for each
        var $restaurantList = $("<tr>");
        $restaurantList.addClass("table table-group");

        // Add the newly created element to the DOM
        $("#restaurant-section").append($restaurantList);

        // Append title of restaurant to table
        var title = results[i].title;
        var pTitle = $("<td>").text(title);
        pTitle.addClass("ptitle");
        $restaurantList.append(pTitle);

        //address
        var address = results[i].address;

        var pAddress = $("<td>").text(address);
        pAddress.addClass("pAddress");
        $restaurantList.append(pAddress);

        //link
        // var link = results[i].link;

        // var pLink = $("<td>").text(link);
        // pLink.addClass("pLink");
        // $restaurantList.append(pLink);

        //phone number
        var phone = results[i].phone;

        var pPhone = $("<td>").text(phone);
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
