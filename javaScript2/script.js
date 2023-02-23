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

console.log(student1);
console.log(teacher1);
  // if the property or method is common to all instance of object
  // if you want a different property you can write it on the object


  // it checks only in the object itself it doesn't go up the inheratince
  // console.log("in teacher ", "active" in teacher);

  // console.log("Name in teacher? ",  teacher.active !== undefined);

  // console.log(teacher);
}