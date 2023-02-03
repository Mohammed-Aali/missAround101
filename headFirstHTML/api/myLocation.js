function showCoords() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            let div = document.getElementById("location")

            div.innerText = `You are at latitude ${latitude}, ${longitude} (with ${position.coords.accuracy} meters accuracey)`
        }, error, options)
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