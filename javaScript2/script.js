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
let teacher1 = new Teacher("English", ["Math", "Science"])

console.log(student1);
console.log(teacher1);
  // if the property or method is common to all instance of object
  // if you want a different property you can write it on the object
  let user = {
    active: false,
    sayHello: function() {
      return "Hello " + this.name
    } 
  };

  let student = {
    name: "god student",
    major: "English"
  }
  let teacher = {
    name: "Peasant Caleb",
    teaching: ["Math", "Science"],
    sayHello: function() {
      let message = this.name + " Teaches "
      this.teaching.forEach(subject => {
        message+= subject + " ";
      })
      return message;
    } 
  }

  Object.setPrototypeOf(teacher, user);
  Object.setPrototypeOf(student, user);

  // its setting false in the student object itslef not the prototype
  student.active = true;
  
  let newMember = [teacher, student]
  newMember.forEach(member => console.log(member.sayHello()))

  let properties = []

  for(let prop in teacher) {
    // this exculdes active from the list
    if(teacher.hasOwnProperty(prop)) {
      properties.push(prop)
    }
  }

  console.log(properties);

  // it checks only in the object itself it doesn't go up the inheratince
  // console.log("in teacher ", "active" in teacher);

  // console.log("Name in teacher? ",  teacher.active !== undefined);

  // console.log(teacher);
}