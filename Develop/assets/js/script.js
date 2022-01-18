var hourTime;
var currentTime = moment();
var currentDay = moment().format("MMM Do YYYY");

// Obj for each row, with corresponding ids
var timeObj8a = {
    time: $("#hour-8a").text(),
    description: $("#dec-text-8a").text(),
    divId: "#dec-8a" 
};
var timeObj9a = {
    time: $("#hour-9a").text(),
    description: $("#dec-text-9a").text(),
    divId: "#dec-9a"
};
var timeObj10a = {
    time: $("#hour-10a").text(),
    description: $("#dec-text-10a").text(),
    divId: "#dec-10a"
};
var timeObj11a = {
    time: $("#hour-11a").text(),
    description: $("#dec-text-11a").text(),
    divId: "#dec-11a"
};
var timeObj12p = {
    time: $("#hour-12p").text(),
    description: $("#dec-text-12p").text(),
    divId: "#dec-12p" 
};
var timeObj1p = {
    time: $("#hour-1p").text(),
    description: $("#dec-text-1p").text(),
    divId: "#dec-1p"
};
var timeObj2p = {
    time: $("#hour-2p").text(),
    description: $("#dec-text-2p").text(),
    divId: "#dec-2p"
};
var timeObj3p = {
    time: $("#hour-3p").text(),
    description: $("#dec-text-3p").text(),
    divId: "#dec-3p"
};
var timeObj4p = {
    time: $("#hour-4p").text(),
    description: $("#dec-text-4p").text(),
    divId: "#dec-4p"
};
var timeObj5p = {
    time: $("#hour-5p").text(),
    description: $("#dec-text-5p").text(),
    divId: "#dec-5p"
};
var timeObj6p = {
    time: $("#hour-6p").text(),
    description: $("#dec-text-6p").text(),
    divId: "#dec-6p"
};
var timeObj7p = {
    time: $("#hour-7p").text(),
    description: $("#dec-text-7p").text(),
    divId: "#dec-7p"
};
var timeObj8p = {
    time: $("#hour-8p").text(),
    description: $("#dec-text-8p").text(),
    divId: "#dec-8p"
};

// Array of row Objs
var timeArr = [timeObj8a, timeObj9a, timeObj10a, timeObj11a, timeObj12p, timeObj1p, timeObj2p, timeObj3p, timeObj4p, timeObj5p, timeObj6p, timeObj7p, timeObj8p];


// Sets Current Day at the top of the page
$("#currentDay").text(currentDay);

// Set Past, Present, and Future classes, on Open and every minute
setTimeBackground(); 

setInterval (setTimeBackground(), 60000);

function setTimeBackground() {
    $(".description-container").removeClass("past present future");

    for (var i = 0; i < timeArr.length; i++) {
        var timeMoment = moment(timeArr[i].time, "h:mma");
        var timeAfter = timeMoment.isAfter(currentTime, "hours");
        var timeDuring = timeMoment.isSame(currentTime, "hours");
        console.log(timeAfter);

        if (timeAfter === true) {
            $(timeArr[i].divId).closest(".description-container").addClass("future");
        } else if (timeDuring === true) {
            $(timeArr[i].divId).closest(".description-container").addClass("present");
        } else {
            $(timeArr[i].divId).closest(".description-container").addClass("past");
        }
    }
}


// Click Description the change to writable textarea
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

// Click off textarea to revert back to paragraph
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

// $(".row").on("click", function(){
//     testText = $("textarea").val;
//     console.log(testText);
// })

$(".description-container").find(".saveBtn").on("click", function(){
    
    console.log("working")

    $(this).sibling(".description").addClass("highlight");
    $(this).closest(".description-container").draggable({
        // helper: "clone",
        zIndex: 1,
        revert: true,
        drag: function(event, button) {
            testTime = $(this).val();
            $(this).closest(".description-container").removeClass("highlight");
        },
        // drop: function(event, button) {
            
        // }
        // axis: y
        // $(this).find("textarea").text("")
    });
});

$(".description-container").droppable({
    drop: function(event, textarea) {
        $(this).find("textarea").text(testText + " Dropped!");
    }
});



// old Generate rows function, replaced with HTML rows

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
