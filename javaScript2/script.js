//default
function pow(x, y = 2, ...extra) { 
  console.log(extra);
  let total = 1; 
  for(let i = 0; i < y; i++) {
    total *= x;
  }
  return total;
}

console.log(pow(3, 3, 4, 6, 3, 4))