let location1 = 1;
let location2 = 2;
let location3 = 3;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while ( isSunk == false ) {
   guess = prompt("Ready, aim, fire! (enter a number 0-6):");
   if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
    } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
    hits = hits + 1;
    alert("Hit!") 

    if(hits == 3){
    isSunk = true;
    alert("You sank my battle ship :'(")
    } 
7
    
    } else {
    alert("Miss");
    }

   }

}

let stats = "You took " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses) * 100 + "%";
alert(stats);