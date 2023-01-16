// REDUCE FUNCTION FOR ARRAY.PROTOTYPE.REDUCE
const banana = [4, 5, 9 , 99]

const initialValue = 10;

let sumWithInitial = banana.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial)