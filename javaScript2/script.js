{
  function User(name, intrest){
    this.name = name;
    this.intrest = intrest;
  }

  function newUser(name, intrest) {
    let person = {
      name: name,
      intrest: intrest
    };

    return person;
  }

  let me = new User("Mohammed", ['talking to people', "dancing", "Eating"]);
  let you = newUser("Hermis", ["Hotwheels"])
  console.log(me);
  console.log(you);
  me.membership = "gold";
}