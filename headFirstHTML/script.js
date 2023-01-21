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

function makePhrases() 
        {
        let words1 = ["24/7", "multi-Tier", "30,000 feet", "B-to-B", "win-win"];
        let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
        let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
        let rand1 = Math.floor(Math.random() * words1.length);
        let rand2 = Math.floor(Math.random() * words2.length);
        let rand3 = Math.floor(Math.random() * words3.length);
        let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
        let phraseElement = document.getElementById("phrase");
        phraseElement.innerHTML = phrase
        }
        window.onload = makePhrases;
    
