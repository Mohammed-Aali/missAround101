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

pow.description = "i love banana"
console.log(pow.description)

function returnFunction(func) {
  return func;
}

console.log(callBack(pow))