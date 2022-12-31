function lieDetectorTest() {
    let lies = 0;
    
    let stolenDiamond = { };
    if (stolenDiamond) {
        console.log(`You stole the dimonds!`);
        lies++;
    }

    let car = {
        keyInPocket: null
    };
    if(car.keyInPocket) {
        console.log(`The key is in your pocket!`)
        lies++;
    }
    if(car.emptyGasTank) {
        console.log(`You drove the car after you stole it!`);
        lies++;
    }

    let foundYouAtTheCrimeScene = [ ];
    if(foundYouAtTheCrimeScene) {
        console.log(`A sure sign of guilt`);
        lies++
    }
    if(foundYouAtTheCrimeScene[0]) {
        console.log(`Caught with a stolen item!`);
        lies++
    }

    let yourName = " ";
    if (yourName) {
        console.log(`Guess you lied about your name`);
        lies++
    }
    return lies;
}

let numberOfLies = lieDetectorTest();
console.log(`You told ${numberOfLies} lies!`);
if (numberOfLies > 3) {
    console.log(`This mofo is guilty`)
}