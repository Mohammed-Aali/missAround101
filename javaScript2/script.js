{ 

function User() {
  this.active = false;
}

User.prototype.sayHello = function() {
  return this.name + " says hi";
}

function Student(name, major) {
  this.name = name;
  this.major = major;
}
// setting the prototype to user
Student.prototype = new User;

function Teacher(name, teaching) {
  this.name = name;
  this.teaching = teaching; 
}
// setting the prototype to user
Teacher.prototype = new User;
Teacher.prototype.sayHello = function(){
  return "Teacher says hi";
} 

let student1 = new Student("beach ball", "English");
let teacher1 = new Teacher("Caleb", ["Math", "Science"])

// console.log(student1, teacher1);
console.log(teacher1 instanceof Teacher);
console.log(student1 instanceof User)

teacher1 instanceof Student ? console.log("yup") : console.log("nope");
}