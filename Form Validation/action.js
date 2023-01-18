$(document).ready(function(){
    $('#vaccine').submit(function(){
        if($("#first-name").val() == ""){
            $("div").fadeIn();
            $("p").text("First name can't be blank")
        }
        if($("#last-name").val() == ""){
            $("div").fadeIn();
            $("p").text("Last name can't be blank")
        }   
        if($("#date").val() == ""){
            $("div").fadeIn();
            $("p").text("Date can't be blank")
        }
        if($("#first-name").val() != "" && $("#last-name").val() != "" && $("#date").val() != ""){
            $("div").fadeIn();
            $("p").text("Success, "+$("#first-name").val()+" "+$("#last-name").val()+"! Your vaccination is reserved on "+$("#date").val());
        }
        return false;
    });
    $('#close').click(function(){
        $(this).parent().fadeOut();
    })
})