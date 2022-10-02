document.write("<h1> Strings</h1><br>");


//concatenate
document.write("<br>0 > "+"Monaem"+" Khan");

var fName = "Monaem",lName = " Khan";
document.write("<br>1 > "+fName+lName);

var fullName = fName + lName;
document.write("<br>2 > "+fullName);

document.write("<br>concat > "+fName.concat(lName));

document.write("<br>length >"+fullName.length);

document.write("<br>charAt > "+fullName.charAt(3));

document.write("<br>Uppercase > "+fullName.toUpperCase());

document.write("<br>lowwercase > "+fullName.toLowerCase());

document.write("<br>slice > "+fullName.slice(0,2));

document.write("<br>split > "+fullName.split(""));

// //take input using prompt()
// var name = prompt("Enter Your Name : ");
// document.write("<br>length of "+name+" is "+name.length);

