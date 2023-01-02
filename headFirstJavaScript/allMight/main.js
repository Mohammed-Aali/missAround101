let view = {
    displayMessage: function(msg){
        let massageArea = document.getElementById("messageArea");
        massageArea.innerHTML = msg;
    },
    displayHit: function(shipLocation) {
        let cell = document.getElementById(shipLocation);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(shipLocation) {
        let cell = document.getElementById(shipLocation);
        cell.setAttribute("class", "miss");
    }
};

let ships = [ { locations: ["10", "20", "30"],
hits: ["", "", ""] }, {locations: ["32", "33", "34"],
hits: ["", "", ""] }, { locations: ["63", "64", "65"],
hits: ["", "", "hit"]} ];

let shit2 = ships[1];
let locations = shit2.locations;
console.log(`The location of the second ship is ${locations[1]}`);

