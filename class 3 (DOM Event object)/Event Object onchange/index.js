//for name
const nam = document.getElementById("name-input-id");
nam.addEventListener("change",function(e){
    // console.log(e);
    // console.log(e.target)
    // console.log(e.target.className);
    // console.log(e.target.id);
    console.log(e.target.value);
});

//->
//->
//for email
const mail = document.querySelector("input[name = email]");
mail.addEventListener("change",changeHandeler);

function changeHandeler(e){
    console.log(e.target.value);
}

//->
//->
//for select
const selection = document.querySelector("#department");
// console.log(selection);

selection.addEventListener("change",(e)=>{
    // console.log("selected");
    console.log(e.target.value);
});



//->
//->
//for checkbox
const check = document.querySelectorAll("input[name=program]");
// console.log(check);
    
    //type-3
Array.from(check).map((program)=>{
    program.addEventListener("change",(e)=>{
        if(e.target.checked){
            console.log("Checked" + e.target.value);
        }
    });
});

    //type-1
// for(var i = 0 ; i<check.length ; i++){
//     check[i].addEventListener("change",(e)=>{
//         console.log(e.target.value);
//     });
// }

    //type-2
// var arr = Array.from(check);
// for(var i = 0 ; i<arr.length ; i++){
//     arr[i].addEventListener("change",(e)=>{
//         console.log(e.target.value);
//     });
// }

    //type-4 [not allowed]
// check.map((program)=>{
//     program.addEventListener("change",(e)=>{
//         if(e.target.checked){
//             console.log("Checked" + e.target.value);
//         }
//     });
// });