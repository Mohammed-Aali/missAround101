window.onload = getMyLocation;

let ourCoords = {
    latitude: 47.624851,
    longitude: -122.52099
}

function getMyLocation() {
    if(navigator.geolocation) {
        const watchButton = document.querySelector("#watch");
        console.log(watchButton)
    } else {
        alert("Oops, No geolocation support");
    }
}

function displayError(error) {
    let errorTypes = {
        0: "Unknown error",
        1: "Permisson denied by user",
        2: "Position is not available",
        3: "Request timed out"
    }

    let errorMessage = errorTypes[error.code]
    if(error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }

    const div = document.getElementById("location")
    div.innerHTML = errorMessage;
}

function displayLocation(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

    const div = document.getElementById("location")
    div.innerHTML = `You are at Latitude ${latitude}, ${longitude} Longitude`

    let km = computeDistance(position.coords, ourCoords);
    let distance = document.getElementById("distance");
    distance.innerHTML = `You are ${km} KM away form WickedlySmart HQ`;
    showMap(position.coords);
}

// compute the distance between two points

function computeDistance(startCoords, destCoords) {
   let startLatRads = degreesToRadians(startCoords.latitude);
   let startLongRads = degreesToRadians(startCoords.longitude);
   let destLatRads = degreesToRadians(destCoords.latitude);
   let destLongRads = degreesToRadians(destCoords.longitude);

   let Radius = 6371; // radius of the Earth in km
   let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
    Math.cos(startLatRads) * Math.cos(destLatRads) *
    Math.cos(startLongRads - destLongRads)) * Radius;
    return distance;
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

let map;

function showMap(coords) {
    var googleLatAndLong = new google.map.LatLng(coords.latitude, coords.longitude)

    var mapOptions = {
        zoom: 8,
        center: googleLatAndLong,
        mapTypeId: google.map.MapTypeId.RAODMAP
    }
    const mapDiv = document.getElementById('map')
    map = new google.maps.Map(mapDiv, mapOptions)
}