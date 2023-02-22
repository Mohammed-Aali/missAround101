let me = {
  name: "Mohammed",
  outputMe: outputMe
}
function outputMe() {
  console.log(this);
}

outputMe()
me.outputMe()