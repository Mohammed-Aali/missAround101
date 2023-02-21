pow.calculated = []
function pow(x, y) {
  let total = 1; 
  for(let i = 0; i < y; i++) {
    total *= x;
  }
  pow.calculated.push(total)
  console.log(pow.calculated)
  return total;
}

pow(8, 9);
