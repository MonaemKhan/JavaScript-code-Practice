const start_id = document.getElementById("start-btn");
const stop_id = document.getElementById("stop-btn");
const reset_id = document.getElementById("reset-btn");
const para_id = document.getElementById("para");

start_id.addEventListener('click',()=>{
    var sec = 0;
    var min = 0;
    var hour = 0;
    para_id.innerHTML = "You are here for: "+ hour + " : "+ min + " : "+ sec;
    time(hour,min,sec);
})

reset_id.addEventListener('click',()=>{
    para_id.textContent = "You are here for: 0 : 0 : 0";
})

function display(){
    
}

function time(hour,min,sec){
    setInterval(() => {
        sec++;
        para_id.innerHTML = "You are here for: "+ hour + " : "+ min + " : "+ sec;
        if(min == 59){
            hour++;
            min = 0;
        }
        if(sec == 59){
            min++;
            sec = -1;
        }
    }, 1);
}