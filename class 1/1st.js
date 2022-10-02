var num = 20;
document.write(typeof(num));
document.write("<br>");

//converting to string
var num = 20;
num = toString(num);
document.write("<br>ss ->  "+typeof(num));
document.write("<br>");

//converting to int
var num = "20";
//num = parseInt(num);
num = Number(num);
document.write("<br>nn -> "+typeof(num));
document.write("<br>");

//method to fixed
var num = 2.5678;
document.write("<br>"+num.toFixed()+"<-0");
document.write("<br>"+num.toFixed(1)+"<-1");
document.write("<br>"+num.toFixed(2)+"<-2");
document.write("<br>"+num.toFixed(3)+"<-3");
document.write("<br>");

//method toPrecision
var num = 1.2346;
document.write("<br>0->"+num.toPrecision());
document.write("<br>1->"+num.toPrecision(1));
document.write("<br>2->"+num.toPrecision(2));
document.write("<br>3->"+num.toPrecision(3));
document.write("<br>4->"+num.toPrecision(4));
document.write("<br>");

//