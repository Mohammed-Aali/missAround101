let scores = [60, 50, 60, 58, 54, 54,
            58, 50, 52, 54, 48, 69,
            34, 55, 51, 52, 44, 51,
            69, 64, 66, 55, 52, 61,
            46, 31, 57, 52, 44, 18,
            41, 53, 55, 61, 51, 44];

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

let highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

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

let bestSolutions = getBestSolutions(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);