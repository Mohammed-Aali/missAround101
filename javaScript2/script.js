//default
function pow(x, y = 2, ...extra) { 
  console.log(extra);
  let total = 1; 
  for(let i = 0; i < y; i++) {
    total *= x;
  }
  return total;
}

function largest(x, ...extra){
  let largest = x;
  for(let i = 0; i < extra.length; i++)
  {
    extra[i] > largest ? largest = extra[i] : largest;
  }
}

console.log(pow(3, 3, 4, 6, 3, 4))