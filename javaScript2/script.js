function pow(x, y) { 
  y = typeof y === "undefined" ? 2 : y;
  let total = 1; 
  for(let i = 0; i < y; i++) {
    total *= x;
  }
  return total;
}

console.log(pow(3))