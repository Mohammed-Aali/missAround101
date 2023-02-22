{
  let user = {
    active: false,
  };

  let student = {
    major: "English"
  }
  let teacher = {
    teaching: ["Math", "Science"]
  }

  Object.setPrototypeOf(teacher, user);
  Object.setPrototypeOf(student, user);

  // its setting false in the student object itslef not the prototype
  student.active = true;
  console.log("Teacher ", teacher.active);
  console.log("Student ", student.active);
}