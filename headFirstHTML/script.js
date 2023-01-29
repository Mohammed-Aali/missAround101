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