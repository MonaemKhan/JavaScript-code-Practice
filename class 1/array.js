// var arr = new Array(5);

// for(var i = 0; i<arr.length;i++){
//     arr[i] = prompt("Enter name "+(i+1)+" :");
// }

// for(var i = 0; i<arr.length;i++){
//     document.write(arr[i]);

//     if(i!=arr.length-1)
//         document.write("<br>");
// }
// document.write(".");


var arr = ["monaem","sama","prosen","mong","apu"];
console.log(arr);

arr.push("saharab");
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("monaem");
console.log(arr);

arr.splice(2,0,"saharab","prince");
console.log(arr);

var sortarr = arr.sort();
console.log(sortarr);

Rsortarr = arr.sort().reverse();
console.log(Rsortarr);

// arr = arr.slice(1,4);
// console.log(arr);

// for(var i = 0 ; i<arr.length; i++){
//     console.log(arr[i]);
// } 
