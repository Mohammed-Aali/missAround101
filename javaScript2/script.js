pow.calculated = {};
function pow(x, y) { 
  let stringVersion = x + "^" + y;
  console.log(`string version ${stringVersion}`)
  let total = 1; 
  for(let i = 0; i < y; i++) {
    total *= x;
  }
  //pow.calculated.push(total)
  pow.calculated.stringVersion = total;
  console.log(pow.calculated)
  return total;
}

pow(3, 3);
pow(3, 3);
pow(10, 3);
pow(6, 2);
