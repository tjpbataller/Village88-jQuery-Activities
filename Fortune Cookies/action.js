$(document).ready(function(){
    $("img").mouseenter(function(){
        $(this).attr("src","photos/"+$(this).attr("alt")+".png");
    }).mouseleave(function(){
        $(this).attr("src","photos/cookie.jpg");
    })
})