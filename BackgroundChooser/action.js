$(document).ready(function(){
    $('div#main_box').click(function(){
        $('img').css('border','none');
        $(this).css('background-image','unset');
    });
    $('img.mini_boxes').click(function(event){
        $('img').css('border','none');
        event.stopPropagation();
        $('div#main_box').css('background-image',"url('" + $(this).attr("src") + "')");
        // $('img').on('click',function(){
            
        // })
        $(this).css('border',"solid 5px yellow");
    });
});