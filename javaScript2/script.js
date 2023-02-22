{
  let user = {
    active: false,
    sayHello:function(){
      return "Hello " + this.name
    } 
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
  console.log(student.sayHello());
  console.log(teacher.sayHello());
}