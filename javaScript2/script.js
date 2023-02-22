{
  function User(banana){
    console.log(this)
    this.name = banana;
    console.log(this)
  }
  let me = new User();
  console.log(me);
}