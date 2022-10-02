document.getElementById("checkbut").addEventListener('click',()=>{
    var num = document.getElementById("numfield").value;
    try{
        if(num<5){
            throw "Input is too low"
        }else if(num>10){
            throw "Input is too High"
        }
    }catch(err){
        console.log(err);
    }
});