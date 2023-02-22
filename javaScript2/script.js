let me = {
  name: "Mohammed",
  outputMe: outputMe
}
function outputMe() {
  console.log(this);
}
function outputMeStrict(){
    'use strict'; // you get undifined if you call it anywhere != but from inside an object aka method.
    console.log(this);
}

function Person() {
  console.log(this);
  this.name = "Mohammed"
  console.log(this)
}
let person = new Person()
console.log(person)
outputMe() // function
me.outputMe() // method
outputMeStrict() // function with strict mode