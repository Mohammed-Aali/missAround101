function validate(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber < 7){
        return false
    }
    for(let i = 0; i < phoneNumber.length; i++){
        if(i === 3) {
            if(phoneNumber.length === 8 && phoneNumber.charAt(i) !== "-" ) {
                return false;
            }
        } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
            return false;
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}

function validator(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber < 7) {
        console.log(`the phone number isnt equal to 8 or 7`)
        return false;
    }
    // let first = phoneNumber.substring(0,3);
    // console.log(first);
    // let second = phoneNumber.substring(phoneNumber.length - 4);
    // console.log(second);
    let arr = phoneNumber.split(phoneNumber.charAt(3));
    if (isNaN(arr[0]) || isNaN(arr[1])) {
        return false;
    } else if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === "-")
    }
    return true;
}
console.log(validate("000-4907"));
console.log(validator("007-1234"));