{
  // normal constructor 
  // this is the recommended way
  function User(name, intrest){
    this.name = name;
    this.intrest = intrest;
    this.outputStuff = function(){
      console.log(this.name, this.intrest)
    }
  }
  let me = new User("Mohammed", ['talking to people', "dancing", "Eating"]);
  let you = newUser("Hermis", ["Hotwheels"])
  console.log(me, you);

  me.outputStuff()
}