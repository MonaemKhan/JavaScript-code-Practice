var ImgSrc = document.querySelector("img");
var para = document.querySelector("p");

function img1(){
    para.innerHTML = "Image 1 is selected"
    para.style.visibility = "visible"
    ImgSrc.src = "image.png"
}

function img2(){
    para.innerHTML = "Image 2 is selected"
    ImgSrc.src = "group.png"
}