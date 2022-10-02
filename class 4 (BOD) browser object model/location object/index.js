// console.log(window.location);
// console.log(location);

//href
console.log(location.href);

//protocol
console.log(location.protocol);

//hostname
console.log(location.hostname);

//port
console.log(location.port);

//pathname
console.log(location.pathname);


let locationDiv = document.querySelector(".location-div"); 

var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.protocol;

var p3 = locationDiv.children[2];
p3.textContent = location.hostname;

var p4 = locationDiv.children[3];
p4.textContent = location.port;

var p5 = locationDiv.children[4];
p5.textContent = location.pathname;

//assain

let butName = document.getElementById("visit-button");

butName.addEventListener("click",()=>{
    location.assign("https://www.google.com");
});
