$(document).ready(function(){
    $("#click button").click(function(){
        $("#click p").css({
            "color": "orange"
        });
    });
    $("#hide button").click(function(){
        $("#hide p").hide();
    });
    $("#show button").click(function(){
        $("#hide p").show();
    });
    $("#toggle button").click(function(){
        $("#toggle p").toggle();
    });
    $("#slide-up button").click(function(){
        $("#slide-up p").slideUp();
    });
    $("#slide-down button").click(function(){
        $("#slide-up p").slideDown(1000);
    });
    $("#slide-toggle button").click(function(){
        $("#slide-toggle p").slideToggle();
    });
    $("#fade-out button").click(function(){
        $("#fade-out p").fadeOut();
    });
    $("#fade-in button").click(function(){
        $("#fade-out p").fadeIn();
    });
    $("#add-class button").click(function(){
        $("#add-class p").addClass("yehey");
    });
    $("#before button").click(function(){
        $("#before p").before("<p>Before</p>");
    });
    $("#after button").click(function(){
        $("#after p").after("<p>After</p>");
    });
    $("#append button").click(function(){
        $("#append p").append("<p>Append</p>");
    });
    $("#html button").click(function(){
        $("#html p").html("okay lol");
    });
    $("#attr button").click(function(){
        $("#attr p").text($("#attr p").attr("name"));
    });
    $("#val button").click(function(){
        alert($("#val input").val());
    });
    $("#text button").click(function(){
        alert($("#text p").text());
    });
});