console.log('Monaem')
function greet(){
    console.log('Hello Good Morning'+" "+ name)
}

// setTimeout(greet,5000,"Monaem");

// intervalid = setInterval(greet,3000,'Monaem');
// clearInterval(intervalid);
// console.log('Out');

function displaytime(){
    time = new Date();
    // console.log(time);
    document.getElementById('time').innerHTML = time;
}

setInterval(displaytime , 1000);