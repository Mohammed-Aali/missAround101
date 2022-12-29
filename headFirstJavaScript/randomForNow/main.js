let plane = {
    make: "heaven",
    model: "AC130",
    year: 1999,
    color: "black",
    passangers: 2,
    convertible: false,
    mileage: 1000000,
    started: false,
    start: function(){
        this.started = true;
    },
    stop: function(){
        this.started = false;
    },
    fly: function() {
        if (this.started) {
            alert(`our AC130 is in the air`);
        } else {
            alert(`plane is switched off. You might want to consider turning it on`)
        }
    }
}

console.log(plane.stop());
console.log(plane);