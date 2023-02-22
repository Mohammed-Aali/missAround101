{
  // normal constructor 
  // this is the recommended way
  function User(name, intrest){
    this.name = name;
    this.intrest = intrest;
  }

  // method stuck in the prototype
  User.prototype.summary = function(){
    console.log( this.name, this.intrest)
  }

  // instances of new objects
  let me = new User("Mohammed", ['talking to people', " dancing", " Eating"]);
  let you = new User("Hermis", ["Hotwheels"])
  console.log(you)

  me.summary();
  you.summary();
}