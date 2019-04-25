$("#findMovie").on("click", function (event) {
    event.preventDefault();
    var movie = $("#movieInput").val();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        //$('#movie-view').text(JSON.stringify(response));
        console.log(response)

    });
});