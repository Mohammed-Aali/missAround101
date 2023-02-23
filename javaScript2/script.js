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
Student.prototype = new User;

function Teacher(name, teaching) {
  this.name = name;
  this.teaching = teaching; 
}
Teacher.prototype = new User;
Teacher.prototype.sayHello = function(){
  return "Teacher says hi";
} 

let student1 = new Student("beach ball", "English");
let teacher1 = new Teacher("Caleb", ["Math", "Science"])

// console.log(student1, teacher1);
}