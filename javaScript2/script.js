function doStuff(input, input2) {
  console.log(input + "\n" + input2)
  console.log(this)
}

doStuff.call(doStuff, 8, 10);