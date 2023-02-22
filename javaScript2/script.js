function cube(x) {
  return x*x*x;
}
let cubeArrow = x => {
  console.log("Calculating...");
  return x*x*x 
};
console.log(cube(6));
console.log(cubeArrow(6));