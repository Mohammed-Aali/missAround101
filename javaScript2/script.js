let me = {
  name: "Mohammed",
  outputMe: outputMe
}
function outputMe() {
  console.log(this);
}
function outputMeStrict(){
    'use strict';
    console.log(this);
}

outputMe() // function
me.outputMe() // method
outputMeStrict() // function with strict mode