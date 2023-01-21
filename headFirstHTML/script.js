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

function init() 
        {
        let tempByHour = [59.2, 60.1, 63, 65, 62]
        for (let i = 0, n = tempByHour.length; i < n; i++) {
            let theTemp = tempByHour[i];
            let id = `temp${[i]}`
            let liElement = document.getElementById(id)
            if (i == 0) {
                liElement.innerHTML = "the tempreture at none was " + theTemp
            } else {
                liElement.innerHTML = `the temperature at ${i} was ${theTemp}`
            }
        }
        }
        window.onload = init;
    
