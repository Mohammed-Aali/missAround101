{
  let user = {
    active: true,
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
  student.active = false;
  console.log("Teacher ", teacher);
  console.log("Student ", student);
}