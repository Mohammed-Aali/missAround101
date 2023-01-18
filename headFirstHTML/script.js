let drink = "RedBull";
let lyrics = "";
let cans = 99;

while (cans > 0) {
    lyrics = `${lyrics} ${cans} cans of ${drink} on the wall <br>`
    lyrics = `${lyrics} ${cans} cans of ${drink} <br>`
    lyrics = `${lyrics} Take one down, pass it around, <br>`
    if (cans > 1) {
        lyrics+= `${cans-1} cans of ${drink} on the wall <br>`
    } else {
        lyrics+= `no more cans of ${drink} on the wall <br>`
    }
    cans--;
}
document.write(lyrics);