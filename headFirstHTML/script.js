let guessInput = document.getElementById("guessInput");
let guess = guessInput.value;
console.log(guess)


checkAnswer(guess);

function checkAnswer(guess) {
        let answers = ["red", "blue", "green"];
        let index = Math.floor(Math.random() * answers.length)

        if (guess == answers[index]) {
                replyWith = `Holy shit! You Are correct, I was thinking of ${answers[index]}`
        } else {
                replyWith = `Sorry, you dummy. I was thinking of ${answers[index]}`
        }
        return replyWith;
}

console.log(checkAnswer())







