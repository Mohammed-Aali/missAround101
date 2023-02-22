function doStuff(input, input2) {
  console.log(input + "\n" + input2)
  console.log(this)
}
let me = {name: "Mohammed"}
let x = doStuff.bind(me, 8, 9);
x();