{
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

  console.log("Name in teacher? ", "teaching" in teacher);

  console.log("Name in teacher? ",  teacher.name !== undefined);
}