$(document).ready(function(){
    var socket = io();
    socket.on("update_color", function(data){
        $("body").css("background-color", data.color);
    });
    $(".color_button").click(function(){
        socket.emit("button_clicked", {color: $(this).attr("data-color")});
    });
});