
function getMyLocation() {
    navigator.geolocation.getCurrentPosition(succussCallBack, errorCallBack);
}

function succussCallBack(position) {
    console.log(position);
}
function errorCallBack(error) {
    console.error(error);
}
