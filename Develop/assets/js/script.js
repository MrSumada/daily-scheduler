var hourTime;
var currentTime = moment();
var currentDay = moment().format("MMM Do YYYY");

$("#currentDay").text(currentDay);

console.log(currentTime);

// var workDayObj = [
//     {
//         time: moment({hour: 5}).format("h:mm A"),
//         text: ""
//     }]

// generateBlocks();

// function generateBlocks() {
//     for (var i = 5; i < 24; i++) {

//         var newBlockEl = $("<div>").addClass("row d-flex vw-90");
//         var newHourDiv = $("<div>").addClass("hour col-2 align-middle");
//         var newHourEl = $("<p>").addClass("hour-time align-middle");
//         var hourText = moment.utc({hour: i}).format("h:mm A");
//         $(newHourEl).text(hourText);

//         $(newHourDiv).append(newHourEl);

//         var newDescriptionDiv = $("<div>").addClass("description col-9");
//         var newDescriptionEl = $("<textarea>").text("");
//         $(newDescriptionDiv).append(newDescriptionEl);

//         var newButtonDiv = $("<div>").addClass("time-block col-1");
//         var newButtonEl = $("<button>").addClass("saveBtn");
//         $(newButtonEl).html('<i class="far fa-calendar-plus"></i>');
//         $(newButtonDiv).append(newButtonEl);

//         $(newBlockEl).removeClass("past present future")

//         if (moment(hourText).isAfter(currentTime)) {
//             $(newBlockEl).addClass("future");
//         }

//         $(newBlockEl).append(newHourDiv, newDescriptionDiv, newButtonDiv);

//         $(".container").append(newBlockEl);
//     }
// }

function saveTextButton() {
    $(".row").on("click", "button", function(){
        console.log("This will save it");
    });
}

saveTextButton();

// function testTime() {
//     $(newBlockEl).removeClass("past present future")

//     if (moment().isAfter(currentTime)) {
//         $(newBlockEl).addClass("future");
//     }
// };

$(".row").draggable({
    helper: "clone",
    zIndex: 100,
    revert: true
    // axis: y
    // $(this).find("textarea").text("")
});

$(".row").droppable({
    drop: function(event, textarea) {
        $(this).find("textarea").text("Dropped!");
    }
});