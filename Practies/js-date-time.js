console.log('JavaScript DAte and Time');

let now = new Date();
// console.log(now);

// let now = new Date("2029-09-30");
// let now = new Date(date,month,year,hours,minutes,seconds,milliseconds);
// let now = new Date(3020,4,6,9,3,2,34);
// console.log(now);

let yr = now.getFullYear();
console.log(yr);
let mn = now.getMonth();
console.log(mn);
let dy = now.getDate();
console.log(dy);

let dd = now.getTime('hh-mm-ss');
console.log(dd);