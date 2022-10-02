const inpu = document.querySelector("#inpu");

inpu.addEventListener("copy",()=>{
    console.log("Copied");
});

inpu.addEventListener("cut",()=>{
    console.log("Cutted");
});

inpu.addEventListener("paste",()=>{
    console.log("pasted");
});