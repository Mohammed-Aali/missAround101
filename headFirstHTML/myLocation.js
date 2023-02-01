const successCallBack = (position) => {
    console.log(position);
}

const errorCallBack = (error) => {
    console.log(error);
}

navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);

const watchId = navigator.geolocation.watchPosition(successCallBack, errorCallBack);
