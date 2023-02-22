{
  // normal constructor 
  // this is the recommended way
  function User(name, intrest){
    this.name = name;
    this.intrest = intrest;
    this.outputStuff = function(){
      console.log("My name is " + this.name, " and  I Like" + this.intrest)
    }
  }
  let me = new User("Mohammed", ['talking to people', "dancing", "Eating"]);
  let you = new User("Hermis", ["Hotwheels"])

  me.outputStuff();
  you.outputStuff();
}