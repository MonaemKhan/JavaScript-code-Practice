function student(name,age,cgpa){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;

    this.display = function(){
        console.log("{ "+this.name);
        console.log(this.age);
        console.log(this.cgpa+"}");
    }
}

var student1 = new student("monaem","24","3.50");
var student2 = new student("prosenjit","24","3.73");
var student3 = new student("mong","24","3.56");

student1.display();

student2.display();

student3.display();