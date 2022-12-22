// challenge on JSCodebox cuz edabit won't load
// Given are two arrays a and b, both have three elements. Return a new array of length 2 containing both middle (index 1) elements of the arrays.
let a = [1,2,4];
let b = [1,2,4];
function goldenMiddle(a, b) {
  let c = [a[1], b[1]]
  return c;
}
console.log(goldenMiddle(a,b));
