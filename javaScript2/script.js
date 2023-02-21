function pow(x, y) { 
  let total = 1; 
  for(let i = 0; i < y; i++) {
    total *= x;
  }
  return total;
}

console.log(pow())
console.log(pow(1,2,3,4,5))