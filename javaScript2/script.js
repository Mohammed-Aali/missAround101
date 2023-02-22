function fact(x) {
  let total = 1;
  for (let i = x-1; i > 1; i--) {
    console.log(total);
    total*= i;
  }
  return total;
}
console.log(fact(6));