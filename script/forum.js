$(document).ready(function () {
    $("#1").click(function () {
        $("#content").toggle();
        $("#instructions").toggle();
    });

    $("#submit").click(function () {
        var blah = $("#comment").val();

        $("#comments").append("<p class='test2'>" + blah + "</p" + "<br>");
    });


    $("#2").click(function () {
        $("#content2").toggle();
        $("#instructions").toggle();
    });

    $("#submit2").click(function () {
        var blah = $("#comment2").val();

        $("#comments2").append(blah + "<br>");
    });

    $("#3").click(function () {
        $("#content3").toggle();
        $("#instructions").toggle();
    });

    $("#submit3").click(function () {
        var blah = $("#comment3").val();

        $("#comments3").append(blah + "<br>");
    });

    $("#4").click(function () {
        $("#content4").toggle();
        $("#instructions").toggle();
    });

    $("#submit4").click(function () {
        var blah = $("#comment4").val();

        $("#comments4").append(blah + "<br>");
    });

    $("#5").click(function () {
        $("#content5").toggle();
        $("#instructions").toggle();
    });

    $("#submit5").click(function () {
        var blah = $("#comment5").val();

        $("#comments5").append(blah + "<br>");
    });


});
