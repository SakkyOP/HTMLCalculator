
function calculate(){
    var textInBox = $("#inputBar").attr("value");
    $("#inputBar").attr("value", eval(textInBox));
}

function checkInKeys (key) {
    var Keys = ["1","2","3","4","5","6","7","8","9","0",".","+","-","*","/","%"];
    for (var i = 0; i<Keys.length;i++){
        if (key == Keys[i]){
            return true;
        }
    }
    return false;
}



$("button").on("click",function(){
    console.log(this.getAttribute("id"));
    var key = this.getAttribute("id");
    if (checkInKeys(key)) {
        var textInBox = $("#inputBar").attr("value");
        $("#inputBar").attr("value",textInBox+key);
    }else if (key == "=") {
        calculate();
    }
});

$("#inputBar").change(function (event) {
    console.log(event);
    if (event.key == "="){
        calculate();
    }
});

$(document).on("keydown",function(event){
    if (checkInKeys(event.key)){
        var textInBox = $("#inputBar").attr("value");
        $("#inputBar").attr("value",textInBox+event.key);
    } else if (event.key == "=") {
        calculate();
    }else if (event.key == "Backspace") {
        var textInBox = $("#inputBar").attr("value");
        $("#inputBar").attr("value",textInBox.slice(0,textInBox.length-1));
    }
});