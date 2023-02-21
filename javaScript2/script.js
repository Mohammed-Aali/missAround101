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

pow(3, 3);
pow(3, 3);
