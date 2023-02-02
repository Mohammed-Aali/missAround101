function showCoords() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {console.log(position)}, error, options)
    } else {
        alert(`Oops, no support for GeoLocation`)
    }
}

window.onload = showCoords;
let error = (error) => {
    console.log(error)
}

let options = {
    enableHighAccurecy: true,
    maximumAge: 3000,
    timeout: 5000
}