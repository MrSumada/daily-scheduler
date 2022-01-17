var hourTime;
var currentTime = moment();
var currentDay = moment().format("MMM Do YYYY");
var testText = "test time"

$("#currentDay").text(currentDay);

console.log(currentTime);

// var workDayObj = [
//     {
//         time: moment({hour: 5}).format("h:mm A"),
//         text: ""
//     }]

generateBlocks();

function generateBlocks() {
    for (var i = 8; i < 20; i++) {

        var newBlockEl = $("<div>").addClass("row d-flex vw-90");
        var newHourDiv = $("<div>").addClass("hour col-2 align-middle");
        var newHourEl = $("<p>").addClass("hour-time align-middle");
        var hourText = moment.utc({hour: i}).format("h:mm A");
        $(newHourEl).text(hourText);

        $(newHourDiv).append(newHourEl);

        var newDescriptionDiv = $("<div>").addClass("description col-8");
        var newDescriptionEl = $("<p>").text("");
        $(newDescriptionDiv).append(newDescriptionEl);

        var newButtonDiv = $("<div>").addClass("time-block col-2");
        var newButtonEl = $("<button>").addClass("saveBtn");
        $(newButtonEl).html('<i class="far fa-calendar-plus"></i>');
        $(newButtonDiv).append(newButtonEl);

        $(newBlockEl).removeClass("past present future")

        if (moment(hourText).isAfter(currentTime)) {
            $(newBlockEl).addClass("future");
        }

        $(newBlockEl).append(newHourDiv, newDescriptionDiv, newButtonDiv);

        $(newBlockEl).on("click", "button", function(){
            console.log("This will save it");
            $(newBlockEl).find(".description").text("Hello");
        });

        $(".container").append(newBlockEl);
    }
}

// $(".description").on("click", "p", function() {
//     var text = $(this)
//         .text()
//         .trim();

//     var textInput = $("<textarea>")
//         .addClass("form-control")
//         .val(text);

//     $(this).replaceWith(textInput);
//     });



// function saveTextButton() {
//     $(".row").on("click", "button", function(){
//         console.log("This will save it");
//     });
// }

// saveTextButton();

// function testTime() {
//     $(newBlockEl).removeClass("past present future")

//     if (moment().isAfter(currentTime)) {
//         $(newBlockEl).addClass("future");
//     }
// };


// $(".row").on("click", function(){
//     testText = $("textarea").val;
//     console.log(testText);
// })

$(".row").draggable({
    helper: "clone",
    zIndex: 100,
    revert: true,
    drag: function(event, textarea) {
        testTime = $(this).val();
    }
    // axis: y
    // $(this).find("textarea").text("")
});

$(".row").droppable({
    drop: function(event, textarea) {
        $(this).find("textarea").text(testText + " Dropped!");
    }
});