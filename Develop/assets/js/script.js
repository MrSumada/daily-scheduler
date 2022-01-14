var hourTime;
var currentTime;

generateBlocks();

function generateBlocks() {
    for (var i = 5; i < 19; i++) {

        var newBlockEl = $("<div>").addClass("row");
        var newHourDiv = $("<div>").addClass("hour col-2 align-middle");
        var newHourEl = $("<p>").addClass("hour-time align-middle");
        var hourText = i + ":00";
        $(newHourEl).text(hourText);
        $(newHourDiv).append(newHourEl);

        var newDescriptionDiv = $("<div>").addClass("description col-8");
        var newDescriptionEl = $("<textarea>").text("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis molestiae, at quo atque corporis vitae est corrupti tempore. Laboriosam id culpa unde, voluptatibus quo neque numquam dignissimos impedit quas ullam!");
        $(newDescriptionDiv).append(newDescriptionEl);

        var newButtonDiv = $("<div>").addClass("time-block col-2");
        var newButtonEl = $("<button>").addClass("saveBtn");
        $(newButtonEl).html('<i class="far fa-calendar-plus"></i>');
        $(newButtonDiv).append(newButtonEl);

        $(newBlockEl).append(newHourDiv, newDescriptionDiv, newButtonDiv);

        $(".container").append(newBlockEl);
    }
}