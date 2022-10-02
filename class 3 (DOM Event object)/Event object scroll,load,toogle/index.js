// window.addEventListener("load",()=>{
//     console.log("load");
// });

// window.addEventListener("unload",()=>{
//     console.log("unload");
// });

    //scroll
document.addEventListener("scroll",()=>{
    const hight = window.scrollY;
    console.log(`height: ${hight}`);
    if(hight>200){
        document.getElementById("para").style.visibility = "visible";
    }else{
        document.getElementById("para").style.visibility = "hidden"
    }
});