$(document).ready(function(){
    $("img").click(function(){
        $(this).attr("src","photo/"+$(this).attr("alt")+".png");
    })
});