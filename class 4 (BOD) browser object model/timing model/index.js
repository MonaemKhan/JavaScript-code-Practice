//setTimeout

setTimeout(()=>{
    console.log("Monaem")
},2000);

const but_id = document.getElementById("save-btn");
const para_id = document.getElementById("para");
const para_id1 = document.getElementById("para1");

but_id.addEventListener('click',()=>{
    para_id.innerHTML = "Save Succesfull";

    setTimeout(()=>{
        para_id.innerHTML = "";
    },3000);
});

function display(){
    var sec = 0;
    var min = 0;
    var hour = 0;
    para_id1.innerHTML = "You are here for: "+ hour + " : "+ min + " : "+ sec;
    setInterval(() => {
        sec++;
        para_id1.innerHTML = "You are here for: "+ hour + " : "+ min + " : "+ sec;
        if(min == 59){
            hour++;
            min = 0;
        }
        if(sec == 59){
            min++;
            sec = -1;
        }
    }, 1000);
}

display();