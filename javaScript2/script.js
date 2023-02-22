function normal() {
  return this;
}

let arrow = () => this;
let x = arrow.bind("hello");
console.log(x());

console.log(normal.bind("This")())
