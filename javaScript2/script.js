function doStuff(input, input2) {
  console.log(input + "\n" + input2)
  console.log(this)
}

let args = [5, 10]
doStuff.apply("Hello", args);