const inpu = document.querySelector("#inpu");

inpu.addEventListener("blur",(e)=>{
    // console.log("Blur ");
    // inpu.style.backgroundColor = "transparent";
    // inpu.style.padding = "0";
    console.log(e.target.value);
    inpu.value = e.target.value.toUpperCase();
});

inpu.addEventListener("focus",()=>{
    console.log("Focus ");
    inpu.style.backgroundColor = "orange";
    inpu.style.padding = "2rem";
});

inpu.addEventListener("focusin",()=>{
    console.log("Focus In ");
});

inpu.addEventListener("focusout",()=>{
    console.log("Focus Out ");
});