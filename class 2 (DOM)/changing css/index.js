
const pid = document.getElementById("para");
// pid.innerHTML = "hi";

function addstyle(){
    pid.classList.add("para-style");
}

function rmstyle(){
    pid.classList.remove("para-style");
}


//para1


const pid1 = document.getElementById("para1");
// pid1.innerHTML = "hi";

function newaddstyle(){
    pid1.classList.replace("para1-style","para1-style1");
}

function newrmstyle(){
    pid1.classList.replace("para1-style1","para1-style");;
}