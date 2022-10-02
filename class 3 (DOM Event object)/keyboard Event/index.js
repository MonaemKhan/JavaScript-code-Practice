const tarea = document.querySelector("#tarea");


tarea.addEventListener("keydown",(e)=>{
    console.log("key down");
    if(e.repeat){
        alert("do not repeat");
    }
});

// tarea.addEventListener("keypress",()=>{
//     console.log("key press");
// });

// tarea.addEventListener("keyup",(e)=>{
//     // console.log("key up");
//     if(e.shiftKey){
//         console.log("ShiftKey + " + e.key);
//     }
// });