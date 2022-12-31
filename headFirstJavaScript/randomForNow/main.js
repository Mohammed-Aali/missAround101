let mo = "mohammed ali al ali";
let i = 0;
while (i < mo.length) {
    if (mo.charAt(i) === "a") {
        console.log(`this mo has an a at ${i}`);
    }
    i++
}

let index = mo.indexOf("dog", 10);
console.log(`there is an ali at ${index} just chilling.`);

let val = mo.substring(9);
console.log(`the substring is ${val}`);

let vals = mo.split(" ");
console.log(`Split array is`, vals);