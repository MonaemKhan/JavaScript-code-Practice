// document.querySelector("#click").addEventListener("click",myfunction);


// function myfunction(){
//     alert("hello");
// }
var clickme = document.querySelector("#click");
clickme.addEventListener("click",function(){
    // alert("hi");
    var myspan = document.querySelector("#Click-span");
    myspan.style.visibility = "visible";
    clickme.style.color = "blue"
});

var heading1 = document.querySelector("#heading");
// heading1.innerHTML = "h"

heading1.addEventListener("mouseover",function () {
    heading1.classList.add("heading-style");
});

heading1.addEventListener("mouseout",function () {
    heading1.classList.remove("heading-style");
});