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

  student.active = false;
  console.log("Teacher ", teacher.active);
  console.log("Student ", student.active);
}