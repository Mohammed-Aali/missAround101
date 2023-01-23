// let drink = "RedBull";
// let lyrics = "";
// let cans = 99;

// while (cans > 0) {
//     lyrics = `${lyrics} ${cans} cans of ${drink} on the wall <br>`
//     lyrics = `${lyrics} ${cans} cans of ${drink} <br>`
//     lyrics = `${lyrics} Take one down, pass it around, <br>`
//     if (cans > 1) {
//         lyrics+= `${cans-1} cans of ${drink} on the wall <br>`
//     } else {
//         lyrics+= `no more cans of ${drink} on the wall <br>`
//     }
//     cans--;
// }
// document.write(lyrics);

// bitches = ['maria', 'Ghadeer', "Shahed", 'hannah', 'fatima', 'zainab', 'maha', 'amjad', 'ahed'];
// console.log(bitches);
// let i = 0;
// while (i < bitches.length) {
//     console.log(`I love you ${bitches[i]} and I'll marry you in the future `)
//     i++;
// }

// let tops = 5;
// while (tops > 0) {
//     for (let spins = 0; spins < 3; spins++) {
//         console.log("top is spinning");
//     }
//     tops--;
// }

// for(let berries = 5; berries > 0; berries--) {
//     console.log(berries);
// }


function makePhrases() {
        let subject = ["I", "He", "She", "they", "them is"];
        let verb = ["banged", "ate", "vomited", "ran", "tasted"];
        let noun = ["Lisa", "Ice", "WW3", "Noodles"];
        const subjectL = subject.length;
        let rand1 = Math.floor(Math.random() * subjectL);
        const verbL = verb.length;
        let rand2 = Math.floor(Math.random() * verbL);
        const nounL = noun.length;
        let rand3 = Math.floor(Math.random() * nounL);

        let phrase = `${subject[rand1]} ${verb[rand2]} ${noun[rand3]}`
        const phraseElement = document.getElementById("phrase");
        phraseElement.innerHTML = phrase;
}
        window.onload = makePhrases;
        console.log([])
    
