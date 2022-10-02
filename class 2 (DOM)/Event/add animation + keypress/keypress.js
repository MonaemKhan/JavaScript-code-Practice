document.addEventListener("keypress",function(event){
    var text = event.key;
    var press = document.querySelector("#demo");
    press.innerHTML = "you have pressed "+text;
});

const tarea = document.querySelector("#tarea");

var count = 0;
tarea.addEventListener("keypress",function(event){
    var t = event.key;
    count++;
    press = document.querySelector("#count");
    press.innerHTML = "Total Count: " + count;

});
