console.log(this);
let arrow = () => this;
let x = arrow.bind("hello");
console.log(x());