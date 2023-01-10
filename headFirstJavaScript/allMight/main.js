function makePassWord(password){
    return function passWordGuess(passwordGuess) {
        return (passwordGuess === password);
    }
}
let tryGuess = makePassWord(`secret`);
console.log(`Guessing 'nope': ${tryGuess(`nope`)}`)
console.log(`Guessing 'secret': ${tryGuess(`secret`)}`)



function multN(n) {
    return function multiB(b){
        return n * b;
    }
}

let multi = multN(6);
console.log(`when you multiply 6 by 7 you get ${multi(7)}`)
console.log(`when you multiply 6 by 10 you get ${multi(10)}`)

function makeCounter() {
    let count = 0;
    return {
        method: function increment(){
            count++
            return count;
        }
    }
}

let counter = makeCounter();
console.log(counter.method());
console.log(counter.method());
console.log(counter.method());

makeTimer("Cookies are done!", 1000);
function handler() {
    alert(doneMessage);
}
function makeTimer(doneMessage, n) {
setTimeout(handler, n);
}
