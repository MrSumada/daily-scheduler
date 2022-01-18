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

// generateBlocks();

// function generateBlocks() {
//     for (var i = 8; i < 20; i++) {

//         var newBlockEl = $("<div>").addClass("row d-flex vw-90");
//         var newHourDiv = $("<div>").addClass("hour col-2 align-middle");
//         var newHourEl = $("<p>").addClass("hour-time align-middle");
//         var hourText = moment.utc({hour: i}).format("h:mm A");
//         $(newHourEl).text(hourText);

//         $(newHourDiv).append(newHourEl);

//         var newDescriptionDiv = $("<div>").addClass("description col-8");
//         var newDescriptionEl = $("<p>").text("");
//         $(newDescriptionDiv).append(newDescriptionEl);

//         var newButtonDiv = $("<div>").addClass("time-block col-2");
//         var newButtonEl = $("<button>").addClass("saveBtn");
//         $(newButtonEl).html('<i class="far fa-calendar-plus"></i>');
//         $(newButtonDiv).append(newButtonEl);

//         $(newBlockEl).removeClass("past present future")

//         if (moment(hourText).isAfter(currentTime)) {
//             $(newBlockEl).addClass("future");
//         }

//         $(newBlockEl).append(newHourDiv, newDescriptionDiv, newButtonDiv);

//         $(newBlockEl).on("click", "button", function(){
//             console.log("This will save it");
//             $(newBlockEl).find(".description").text("Hello");
//         });

//         $(".container").append(newBlockEl);
//     }
// }



$(".description").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");

    $(".description").on("blur", "textarea", function() {
    });
});

$(".description").on("blur", "textarea", function() {
    var text = $(this)
        .val()
        .trim();

    // var status = $(this)
    //     .closest("#row-")
    //     .attr("id")
    //     .replace("row-", "description-");

    var descriptionP = $("<p>")
        .addClass("description-text")
        .text(text);

    $(this).replaceWith(descriptionP);

    // get the task's position in the list of other li elements
    // var index = $(this)
    //     .closest(".row-8a")
    //     .index();
});

// $("div[id$='9a']").on("click", "p", function() {
//     var text = $(this)
//         .text()
//         .trim();



// function saveTextButton() {
//     $(".row").on("click", "button", function(){
//         console.log("This will save it");
//     });
// }

// saveTextButton();

testTime();

function testTime() {

    var blockTime = $(".hour-time").val;
    console.log(blockTime);
    // var momentTime = moment.utc({hour: i}).format("h:mm A");

    // $(".description").removeClass("past present future")

    // if (moment().isAfter(currentTime)) {
    //     $(".description").addClass("future");
    // }
// }
};


// $(".row").on("click", function(){
//     testText = $("textarea").val;
//     console.log(testText);
// })
$(".description-container").find(".saveBtn").on("click", function(){

$(this).closest(".description-container").addClass("highlight");
$(".description-container").draggable({
    // helper: "clone",
    zIndex: 1,
    revert: true,
    drag: function(event, textarea) {
        testTime = $(this).val();
    }
    // axis: y
    // $(this).find("textarea").text("")

});
});

$(".row").droppable({
    drop: function(event, textarea) {
        $(this).find("textarea").text(testText + " Dropped!");
    }
});