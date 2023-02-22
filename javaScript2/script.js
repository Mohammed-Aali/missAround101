function doStuff(input, input2) {
  console.log(input + "\n" + input2)
  console.log(this)
}

let x = doStuff.bind("Hello", 8, 9);
x();