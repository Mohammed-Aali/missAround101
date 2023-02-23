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

function Teacher(name, teaching) {
  this.name = name;
  this.teaching = teaching; 
}


let student1 = new Student("beach ball", "English");
let teacher1 = new Teacher("Caleb", ["Math", "Science"])

console.log(student1, teacher1);
}