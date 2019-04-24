//<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    //<script type="text/javascript">
    
      $("#find-movie").on("click", function(event) {
        event.preventDefault();
        var movie = $("#movie-input").val();
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

        $.ajax({
      url: queryURL,
      method: "GET"
      }).then(function(response) {

        $('#movie-view').text(JSON.stringify(response));
        console.log(response)

      });
    });