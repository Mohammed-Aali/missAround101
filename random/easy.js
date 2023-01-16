// REDUCE FUNCTION FOR ARRAY.PROTOTYPE.REDUCE
const banana = [4, 5, 9 , 99]

const initialValue = 10;

let sumWithInitial = banana.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial)

const sum = (...args) => args.reduce((a, b) => a + b , 0);

const baseArray = [1, 2, 3, 4, 5]
console.log(sum(2,3,4,5,6,6,7,8,5,4,3,3))

let x = Math.max(...baseArray)
console.log(x);