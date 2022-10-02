//confirm dialog box
function del(){
    let value = confirm("Are you sure about it");
    if(value){
        console.log("Yes");
    }else{
        console.log("No")
    }
}

// del();

var h1 = document.createElement("h1");
var text;

function input(){
    let val = prompt("Enter your name");
    if(val == null || val == ''){
        text = "No Name Found"
    }else{
        text = "Welcome "+val;
    }
}
input();

var txtdoc = document.createTextNode(text);

h1.appendChild(txtdoc);
document.body.appendChild(h1);