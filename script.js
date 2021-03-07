$(document).ready(function () {

    function currentDate() {
        var momentDate = moment().format('LLLL');
        $("#currentDay").text(momentDate);
    };
    currentDate();

    var date = new Date();

    var currentHour = date.getHours();

    $(".userInput").each(function () {

        if ($(this).attr("time") == currentHour) {
            $(this).addClass("present");
        };

        if ($(this).attr("time") > currentHour) {
            $(this).addClass("future");
        };

        if ($(this).attr("time") < currentHour) {
            $(this).addClass("past");
        };

    });
    var planLogs = JSON.parse(localStorage.getItem("planLogs")) || [];
    // console.log(planLogs);

    var areaText = $("textArea[name='text'");
    // console.log(areaText);

    $(areaText).each(function () {
        $(this).val(planLogs[$(this).attr("time")]);
    });

    $("button").on("click", function () {

        $(areaText).each(function () {
            (planLogs)[$(this).attr("time")] = $(this).val();

            localStorage.setItem("planLogs", JSON.stringify(planLogs));

        });


    });
});