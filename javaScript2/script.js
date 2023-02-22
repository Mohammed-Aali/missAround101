function fact(x) {
  let total = 1;
  for (let i = x; i > 1; i--) {
    total*= i;
  }
  return total;
}
console.log(fact(5));