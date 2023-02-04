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

    options.timeout += 100;
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack, options)
    div.innerHTML+= `checking again with timeout = ${options.timeout}`
    console.log(error.message)
}


let options = {
    enableHighAccurecy: true,
    maximumAge: 0,
    timeout: 0.000001
}

getMyLocation()