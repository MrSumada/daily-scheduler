var hourTime;
var currentTime = moment();
var droppableText = "";
var wasDropped = false;
var wasDragged = false;
var isDragging = false;

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
var timeArr = [];
var storedArr = JSON.parse(localStorage.getItem('dailyPlan'));

    //get Arr from local storage or timeObjs
if (!storedArr) {

    timeArr = [timeObj8a, timeObj9a, timeObj10a, timeObj11a, timeObj12p, timeObj1p, timeObj2p, timeObj3p, timeObj4p, timeObj5p, timeObj6p, timeObj7p, timeObj8p];

    } else {
        timeArr = storedArr;

        for (var i = 0; i < timeArr.length; i++) {
            var saveDescription = timeArr[i].description;
            $(timeArr[i].divId)
                .find("p")
                .text(saveDescription);
        }
    }

// Sets Current Day at the top of the page, on Open and every 30 seconds
$("#currentDay").text("For " + moment().format("MMM Do YYYY"));

setInterval (function(){
    $("#currentDay").text("For " + moment().format("MMM Do YYYY"));
}, 30000);

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

//  Drag and Drop functions
$(".description-container").draggable({
    zIndex: 1,
    revert: true,
    revertDuration: 1,
    axis: "y",
    opacity: 0.85,
    start: function() {
        droppableText = $(this).find("p").text().trim();
        // var dragged = true;
        
    },
        //remove text if Drop was successful
    stop: function() {
        if (wasDropped === true) {
            $(this).find("p").text("");
            }
        }
    })
        //determine when mouse click was dragging vs clicking
    .mousedown(function() {
        // isDragging = false;
    })
    .mousemove(function() {
        isDragging = true;
    })
    .mouseup(function() {
        wasDragged = isDragging;
        isDragging = false;
    })
        // successful drop function, use "And" if adding multiple descriptions
        // update timeArr
        // update wasDropped to true for 1 second, will briefly disable other clicks
$(".description-container").droppable({
    drop: function(event, p) {
        var landingText = $(this).find("p").text().trim();
        if (!landingText) {
            $(this).find("p").text(droppableText);
        } else {
            if (droppableText !== "") {
            $(this).find("p").text(landingText + " And " + droppableText);
            }
        }

        wasDropped = true;
        
        // remove dragged Description
        // also update timeArr on drop
        setTimeout(function(){
            wasDropped = false;
            for (var i = 0; i < timeArr.length; i++) {
                var newDescription = $(timeArr[i].divId).find("p").text().trim();

                timeArr[i].description = newDescription;
            }
        }, 900)
    }
});

// Click function, Create textarea in description
// only if not Dragged aka wasDragged === false
$(".description-container").on("click", "p", function() {
    if (wasDragged === false) {
        var text = $(this)
            .text()
            .trim();

        var textInput = $("<textarea>")
            .val(text);

        $(this).replaceWith(textInput);

        textInput.trigger("focus");
    }
});

// Click off textarea to revert back to paragraph
$(".description-container").on("blur", "textarea", function() {

    droppableText = $("#dec-text-2p").text().trim();

    var text = $(this)
        .val()
        .trim();

    var descriptionP = $("<p>")
        .addClass("dec-text")
        .text(text);

    $(this).replaceWith(descriptionP);
});


// click Save button to add to localStorage
$(".saveBtn").on("click", function() {

    for (var i = 0; i < timeArr.length; i++) {
        var newDescription = $(timeArr[i].divId).find("p").text().trim();

        timeArr[i].description = newDescription;
    }

    $(this).addClass("highlight").text("Saved!");

    setTimeout(function() {
        $(".saveBtn").removeClass("highlight").html('<i class="far fa-calendar-plus"></i>');
        }, 1000)
    localStorage.setItem("dailyPlan", JSON.stringify(timeArr));
})