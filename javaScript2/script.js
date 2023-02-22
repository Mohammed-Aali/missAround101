{
  function User(name){
    console.log(this)
    this.name = name;
    console.log(this)
  }
  let me = new User("Mohammed");
  console.log(me);
}