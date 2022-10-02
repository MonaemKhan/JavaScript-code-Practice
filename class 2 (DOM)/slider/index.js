const photo = ["1.png","2.png","3.png"];

const img = document.getElementById("images");
var count = 0;
img.src = photo[count]
function next(){
    count++;
    if(count >= photo.length){
        count = 0;
        img.src = photo[count];
    }else{
        img.src = photo[count];
    }
}

function prev(){
    count--;
    if(count < 0){
        count = photo.length-1;
        img.src = photo[count];
    }else{
        img.src = photo[count];
    }
}