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
}
