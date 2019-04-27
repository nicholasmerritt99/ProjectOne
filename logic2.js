$(document).ready(function(){

$("#findMovie").on("click", function (event) {
    event.preventDefault();
    var movie = $("#movieInput").val();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var results = response;
        var actors = results.Actors;
        var rated = results.Rated;
        var director = results.Director;
        //$('#movie-view').text(JSON.stringify(response));
        //console.log(actorOne)
        $("#rated").text(rated);
        $("#actors").text(actors);
        $("#director").text(director);
    });
});
})
