{
  let user = {
    active: true,
  };

  let teacher = {
    teaching: ["Math", "Science"]
  }

  Object.setPrototypeOf(teacher, user);
  console.log(teacher);
}