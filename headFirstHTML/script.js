let movie1 = {
        title: "Plan 9 from outer space",
        showTimes: ["3:00pm", "7:00pm", "11:00pm"], 
        genre: "cult classic",
        rating: 2
}

let movie2 = {
        title: "Forbidden Planet",
        showTimes: ["5:00pm", "9:00pm"], 
        genre: "classic sci-fi",
        rating: 5
}

function getNextShowing(movie) {
        let now = new Date().getTime();

        for (let i = 0; i < movie.showTimes.length; i++){
                let showTime = getTimeFromString(movie.showTimes[i]);
                if ((showTime - now) > 0) {
                        return `Next Showing of ${movie.title} is ${movie.showTimes[i]}`
                }
        }
        return null;
}

function getTimeFromString(timeString) {
        let theTime = new Date();
        var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
        theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
        theTime.setMinutes( parseInt(time[2]) || 0 );
        return theTime.getTime();
}

let nextShowing = getNextShowing(movie1);
console.log(nextShowing);
nextShowing = getNextShowing(movie2);
console.log(nextShowing);
