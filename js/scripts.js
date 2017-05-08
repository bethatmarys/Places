//back-end business logic
function Place (locale, landmark, season, notes) {
  this.locale = locale;
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;
};

//front-end UI logic
$(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocale = $("input#locale").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedSeason = $("input#season").val();
    var inputtedNotes = $("input#notes").val();

    var newPlace = new Place(inputtedLocale, inputtedLandmark, inputtedSeason, inputtedNotes);
    console.log(newPlace);

    $("ul#places").append("<li><span class='place'>" + newPlace.locale + "</li></span>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.locale);
      $(".landmark").text(newPlace.landmark);
      $(".season").text(newPlace.season);
      $(".notes").text(newPlace.notes);
    });

    $("input#locale").val("");
    $("input#landmark").val("");
    $("input#season").val("");
    $("input#notes").val("");
  });
});
