const div = document.getElementById("div1");
const p = document.getElementById("drag1");

p.addEventListener("dragstart",(e)=>{
    // console.log("start");
    e.dataTransfer.setData("Text",e.target.id);
});

div.addEventListener("dragover",(e)=>{
    e.preventDefault();
    // console.log("over");
    // e.dataTransfer.setData("Text",e.target.id);
});

div.addEventListener("drop",(e)=>{
    // console.log("drop");
    let id = e.dataTransfer.getData("Text");
    console.log(id);
    div.appendChild(document.getElementById(id));
    e.preventDefault();
});
