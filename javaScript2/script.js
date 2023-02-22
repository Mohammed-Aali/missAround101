function doStuff(input) {
  console.log(input)
  console.log(this)
}

doStuff.call(doStuff, 8);