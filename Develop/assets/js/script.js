var hourTime;
var currentTime = moment();
var droppableText = "droppable";
var wasDragged = false;
var wasDropped = false;

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
$("#currentDay").text(moment().format("MMM Do YYYY"));

// Set Past, Present, and Future classes, on Open and every 30 seconds
setTimeBackground();

setInterval (function(){
    setTimeBackground();
}, 30000);


//remove old Time Classes, and replace with current ones, loops through array to assign classes
function setTimeBackground() {
    $(".description-container").removeClass("past present future");

    for (var i = 0; i < timeArr.length; i++) {
        var timeMoment = moment(timeArr[i].time, "h:mma");
        var timeAfter = timeMoment.isAfter(currentTime, "hours");
        var timeSame = timeMoment.isSame(currentTime, "hours");
        

        if (timeAfter === true) {
            $(timeArr[i].divId).closest(".description-container").addClass("future");
        } else if (timeSame === true) {
            $(timeArr[i].divId).closest(".description-container").addClass("present");
        } else {
            $(timeArr[i].divId).closest(".description-container").addClass("past");
        }
    }
}

// Check if dragging

$(function() {
    var isDragging = false;
    $(".description")
    .mousedown(function() {
        isDragging = false;
    })
    .mousemove(function() {
        isDragging = true;
    })
    .mouseup(function() {
        stopDragging = isDragging;
        isDragging = false;
        console.log(stopDragging);
    })
});


// Click Description the change to writable textarea

//     $(".description").find("p").on("click", function() {
//         var text = $(this)
//             .text()
//             .trim();

//         var textInput = $("<textarea>")
//             .addClass("form-control")
//             .val(text);

//         $(this).replaceWith(textInput);

//         textInput.trigger("focus");

//         // $(timeArr[i].divId).on("blur", "textarea", function() {
//         // });
//     });


// // Click off textarea to revert back to paragraph
// $("#dec-div-8a").on("blur", "textarea", function() {

//     // droppableText = $("#dec-text-2p").text().trim();
//     // console.log(droppableText);

//     var text = $(this)
//         .val()
//         .trim();

//     droppableText = text;

//     // var status = $(this)
//     //     .closest("#dec-")
//     //     .attr("id")
//     //     .replace("dec-", "dec-text-");

//     var descriptionP = $("<p>")
//         .addClass("dec-text")
//         .attr("id", "dec-text-8a")
//         .text(text);

//     $(this).replaceWith(descriptionP);
// });

// New Drag and Drop functions

$(".description-container").draggable({
    zIndex: 1,
    revert: true,
    axis: "y",
    start: function() {
        droppableText = $(this).find("p").text().trim();
        // console.log(droppableText);
        
    },
    stop: function() {
        var descriptionP = $("<p>")
        .addClass("description-text")
        .text(text);

        $(this).replaceWith(descriptionP);
        $(this).find("p").text = "";

    }
})

$(".description-container").droppable({
    drop: function(event, p) {
        var currentText = $(this).find("p").text().trim();
        if (!currentText) {
            $(this).find("p").text(droppableText);
        } else {
            $(this).find("p").text(currentText + " And " + droppableText);
        }
    }
});



// OLDDDD Version of click functions

$(".description").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        // .addClass("form-control")
        .val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");

    $(".description").on("blur", "textarea", function() {
    });
});

// Click off textarea to revert back to paragraph
$(".description").on("blur", "textarea", function() {

    droppableText = $("#dec-text-2p").text().trim();
    // console.log(droppableText);

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