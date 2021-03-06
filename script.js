// THEN the current day is displayed at the top of the calendar WHEN I scroll down  //
// Creating variables for the time and date //

var currentHour;
var time;
var header = document.getElementById("todaysdate").append(newDate());

$(document).ready(function() {
    

    //creating save button//

    $(".saveBtn").on("click", function() {
        
        var time = $(this).parent().attr("id");
        var value = $(this).siblings("description").val();

        localStorage.setItem(time, value);

    }
})

function currentHour() {
    var currentHour = moment().hours();

    $(".time-block").each(function() {
        var rowHour = parseInt($(this).attr("id").split("-")[1]);

        if(rowkHour < currentHour) {
            $(this).addClass("past")

        } else if (rowHour === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    }
}

currentTime();

var interval = setInterval(currentTime, 15000);

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


$("currentDay").text(moment().format("dddd, MMMM"));









































// THEN I am presented with timeblocks for standard business hours  //
// WHEN I view the timeblocks for that day  //
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future  //
// WHEN I click into a timeblock  //
// THEN I can enter an event  //
// WHEN I click the save button for that timeblock  //
// THEN the text for that event is saved in local storage  //
// WHEN I refresh the page  //
// THEN the saved events persist  //