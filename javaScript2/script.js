function pow(x, y = 2) { 
  let total = 1; 
  for(let i = 0; i < y; i++) {
    total *= x;
  }
  return total;
}

console.log(pow(3))