const find_button = document.querySelectorAll(".mybutton");
const len = find_button.length;
//  document.write(len);

for(var i = 0 ; i<len ; i++){
    find_button[i].addEventListener("click",function(){
        const text = this.innerHTML;
        // audioPlay(text);
        playanimation(text);
    });
}

//keypress listener
document.addEventListener("keypress",function(event){
    var key_val = event.key;
    // audioPlay(key_val);
    playanimation(key_val);
});

function audioPlay(text){
    var audio;
    switch(text){
        case "a":
            audio = new Audio("a.mp3");
            audio.play();
            break;
        case "b":
            audio = new Audio("b.mp3");
            audio.play();
            break;
        case "c":
            audio = new Audio("c.mp3");
            audio.play();
            break;
        }
}

function playanimation(text){
    var select = document.querySelector("."+text);
    select.classList.add("anim");
    setTimeout(() => {
        select.classList.remove("anim");
    }, 1700);
}