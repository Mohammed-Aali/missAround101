let balance = 10500;
let cameraOn = true;

function steal(balance, amount) {
    cameraOn = false;
    if (amount < balance) {
        balance = balance - amount;
    }
    return amount;
    cameraOn = true;
}

let amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");