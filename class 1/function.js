function area(a){
    var result = a*2;
    document.write(result);
}

area(8);

document.write("<br>");

add(2,3);
function add(x,y){
    var result = x+y;
    document.write(result);
}

document.write("<br>");

sub(3,2);
function sub(x,y){
    var result = x-y;
    document.write(result);
}

document.write("<br>");

(function display(massage){
    document.write(massage+"<br>");
})("hi");