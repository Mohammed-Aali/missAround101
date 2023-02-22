{
  let user = {
    active: false,
    sayHello: "Hello" + this.name 
  };

  let student = {
    name: "god student",
    major: "English"
  }
  let teacher = {
    name: "Peasant Caleb",
    teaching: ["Math", "Science"]
  }

  Object.setPrototypeOf(teacher, user);
  Object.setPrototypeOf(student, user);

  // its setting false in the student object itslef not the prototype
  student.active = true;
  console.log("Teacher ", teacher.active);
  console.log("Student ", student.active);
}