    //for of loop
var num  = [12,23,22,33,5];
for(let i of num){
    console.log(i);
}
for(let i = 0;i<num.length;i++){
    //traditional for loop
    console.log("num : "+num[i]);
}

    //for in loop
let student = {
    id: "2016-13-14",
    name: "M.A Monaem Khan",
    cgpa: 3.44
}
for(let x in student){
    console.log(`${x} : ${student[x]}`);
}
var obj_length = Object.keys(student).length;
    console.log(`student : ${Object.values(student)}`);

    //for each loop
var number = [2,3,4,5,6,7];
var squareroot = [];
number.forEach(x => {
    squareroot.push(x*x);
});
console.log(squareroot);

number.forEach((x,index,arr)=>{
    //function(x,index,arr){}
    arr[index] = x+5;
})
console.log(number);

    //map
var numbers = [2,3,4,5,6];
var add_num = numbers.map((x)=>{
    return (x+2);
});
console.log(add_num);
