let scores = [60, 50, 60, 58, 54, 54,
            58, 50, 52, 54, 48, 69,
            34, 55, 51, 52, 44, 51,
            69, 64, 66, 55, 52, 61,
            46, 31, 57, 52, 44, 18,
            41, 53, 55, 61, 51, 44];

let costs = [.25, .27, .25, .25, .25, .25, 
            33, .31, .25, .29, .27, .22, 
            31, .25, .25, .33, .21, .25, 
            .25, .25, .28, .25, .24, .22,
            .20, .25, .30, .25, .24, .25, 
            .25, .25, .27, .25, .26, .29];
console.log(costs[11]);
console.log(costs[18]);

function printAndGetHighScore(array) {
    let highScore = 0;
    let output;
    for (let i = 0; i < array.length; i++) {
        output = `bubble solution#${i} score: ${scores[i]}`;
        console.log(output);

        if (array[i] > highScore) {
            highScore = array[i];
        }
    }
    return highScore;
}

function getBestSolutions(array, highScore) {
    let bestSolutions = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == highScore) {
            bestSolutions[bestSolutions.length] = i;
            // bestSolutions.push(i);
        } 
    }
    return bestSolutions;
}



function getMostEffectiveSolution(array1, array2, highScore) {
    let cost = 100;
    let k;
    for (let i = 0; i < array1.length; i++) {
    if (array1[i] == highScore) {
        if (cost > array2[i]) {
            k = i;
            cost = array2[k]
        }
    }
    }
    return k;
}


let highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
let bestSolutions = getBestSolutions(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);
let mostCostEffective = getMostEffectiveSolution(scores, costs, highScore);
console.log(`bubble solution#${mostCostEffective} is the most cost effective`);