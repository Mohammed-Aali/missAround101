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


  console.log(teacher);
  console.log(student);
}