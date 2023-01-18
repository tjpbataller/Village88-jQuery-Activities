$(document).ready(function(){
    $( ".sortable" ).sortable().droppable({
        drop: function(event, ui){
            console.log($(this))
        }
    });
    $('li').draggable({
        connectToSortable: ".sortable"
    });
})