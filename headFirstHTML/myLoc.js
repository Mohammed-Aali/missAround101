window.onload = getMyLocation;

function getMyLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError)
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
}