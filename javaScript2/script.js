function pow(x, y) {
  let total = 1; 
  for(let i = 0; i < y; i++) {
    total *= x;
  }
  return total;
}
// let coolFuntions = [pow]
// console.log(coolFuntions[0](2,3))

let mathFunction = {
  power: pow
}

function returnFunction() {
  return pow;
}

console.log(returnFunction()(10, 5))