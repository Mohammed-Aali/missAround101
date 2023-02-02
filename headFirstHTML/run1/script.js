let movie1 = {
        title: "Plan 9 from Outer Space",
        genre: "Cult Classic",
        rating: 5,
        showtimes: ["3:00pm", "7:00pm", "11:00pm"],
        getNextShowing: function() {
            let now = new Date().getTime();
        for (let i = 0; i < this.showtimes.length; i++){
            let showtime = getTimeFromString(this.showtimes[i]);
        if ((showtime - now) > 0) {
            return "Next showing of " + this.title + " is " + this.showtimes[i];
            }
        }
        return null;
        }
}


function getTimeFromString(timeString) {
        var theTime = new Date();
        var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
        theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
        theTime.setMinutes( parseInt(time[2]) || 0 );
        return theTime.getTime()
}

//////// this new line is for dogs only and we're talking constructor

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if(this.weight > 25) {
            console.log(`${this.name} says woof!`);
        } else {
            console.log(`${this.name} says Yip!`)
        }
    }
}

let fido = new Dog("Fido", "Mixed", 67) 
let tiny = new Dog("Tiny", "Chawalla", 8)
let clifford = new Dog("Clifford", "Bloodhound", 65)

function Movie(title, genre, rating, showtimes) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showtimes = showtimes;
    this.getNextShowing = function() {
        let now = new Date().getTime()
        for(let i = 0, n = this.showtimes.length; i < n; i++) {
            let showtime = getTimeFromString(this.showtimes[i])
            if ((showtime - now) > 0) {
                return `Next showing of ${this.title} is ${this.showtimes[i]}`
            }
           
        }
    }
}

let banzaiMovie = new Movie("Buckaroo Banzai", "Cult Classic", 5, ["1:00pm", "5:00pm", "7:00pm", "11:00pm"])

let plan9Movie = new Movie("Plan 9 from Outer Space", "Cult Classic", 2, ["3:00pm", "7:00pm", "11:00pm"]);

console.log(plan9Movie.getNextShowing())

function degreeToDecimal(degree, minutes, seconds) {
    return degree + (minutes / 60.0 ) + (seconds / 3600.0)
}