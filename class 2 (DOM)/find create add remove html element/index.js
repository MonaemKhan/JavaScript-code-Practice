//creating HTML element

var heading4 = document.createElement("h1");
var text4 = document.createTextNode("This is heading3");

heading4.appendChild(text4);

var myDiv = document.getElementById("my-div");

myDiv.appendChild(heading4);

//remove element

var heading2 = document.getElementsByTagName("h1")[1];
        // heading2.innerHTML = "hi";
myDiv.removeChild(heading2);


// adding at the top
var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading0");

heading0.appendChild(text0);

var heading3 = document.getElementsByTagName("h1")[1];
        // heading3.innerHTML = "hi";
myDiv.insertBefore(heading0,heading3);