const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(8000);
const io = require("socket.io")(server);
var color = "white";

io.on("connection", function(socket){
    socket.emit("update_color", {color: color});
    socket.on("button_clicked", function(data){
        color = data.color;
        io.emit("update_color", {color: color});
    });
});