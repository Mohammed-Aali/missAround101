{
  function User(name, intrest){
    this.name = name;
    this.intrest = intrest;
  }
  let me = new User("Mohammed", ['talking to people', "dancing", "Eating"]);
  let you = new User("Hermis", ["Hotwheels"])
  console.log(me);
  console.log(you);
  me.membership = "gold";
}