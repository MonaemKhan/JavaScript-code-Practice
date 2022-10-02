const find_button = document.querySelectorAll(".mybutton");
const len = find_button.length;
//  document.write(len);

for(var i = 0 ; i<len ; i++){
    console.log(i);
    find_button[i].addEventListener("click",function(){
        const text = this.innerHTML;
        console.log(i + "out");
        document.querySelector("#heading1").innerHTML = text + " is Clicked";
    });
}

const find_name = document.querySelectorAll(".NameSelect");
const l = find_name.length;
const heading2 = document.querySelector("#heading2");
// document.write(l);
for(var i = 0 ; i<l ; i++){
    find_name[i].addEventListener("click",function(){
        const str = this.innerHTML;
        heading2.innerHTML = "you elect " + str;
        name_color(str);
    });
}

function name_color(str){
    switch(str){
        case "Monaem":
            heading2.style.color = "red";
            break;
        default :
            heading2.style.color = "black"
            break;
    }
}
