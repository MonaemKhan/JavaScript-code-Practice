console.log('JavaScript Arrow Function');

// function greet(){
//     console.log('Monaem');
// }

// greet();

// let greet = ()=>{
//     console.log('Monaem')
// };
// greet();

// let sum = (a,b)=>a+b;

// let greet = () =>console.log('Monaem');
// greet();

let obj1 = {
    greating: "Good Morning",
    name: ['Monaem','Rahat','Sama'],
    speak(){
        this.name.forEach((nam) =>{
            console.log(this.greating+" "+ nam);
        });
    }
}

obj1.speak();

