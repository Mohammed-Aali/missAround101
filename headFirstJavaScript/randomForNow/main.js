function addSongs() {
    let song1 = document.getElementById("song1");
    let song2 = document.getElementById("song2");
    let song3 = document.getElementById("song3");

    song1.innerHTML = "Blue Sued strings, by Elvis Pagely";
    song1.setAttribute("class", "redtext");
    song2.innerHTML = "Young God, by Russ";
    let c = song1.getAttribute("ass");
    song3.innerHTML = "Candy shop, By 50cents";
    
    if (c == null) {
        console.log(`Hmm, strange there seems to be no attribute.`)
    } else {
        console.log(`found it ${c}`);
    }
}

window.onload = addSongs;
