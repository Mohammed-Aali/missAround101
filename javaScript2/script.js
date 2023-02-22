function doStuff(input, input2) {
  console.log(input + "\n" + input2)
  console.log(this)
}

doStuff.apply("Hello", [8, 10]);