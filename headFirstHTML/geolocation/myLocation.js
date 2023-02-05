function getMyLocation() {
    if ('geolocation' in navigator) {
       navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack, options)
    } else {
        alert(`Oops, no support for GeoLocation`)
    }
}

function successCallBack(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    const div = document.querySelector("#location")

    div.innerHTML = `this is my current postions latitude ${latitude} and longitude ${longitude}.
    the position was found in ${options.timeout} miliseconds`
}

function errorCallBack(error) {
    const div = document.querySelector("#location")
    div.innerHTML = error.message
    if(error.code == 1) {
        console.log(error.message)
    } else {
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack, options)

    div.innerHTML+= `checking again with timeout = ${options.timeout}`
    }
    
}


let options = {
    enableHighAccurecy: true,
    maximumAge: 0,
    timeout: 100
}

window.onload = getMyLocation;