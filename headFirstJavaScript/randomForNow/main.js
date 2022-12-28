let dog = {
    name: "Fido",
    weight: 20.2,
    breed: "mixed",
    activity: "fetch balls"
};
let bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF"
} else {
    bark = "woof woof"
};
let speak = `${dog.name} says ${bark} when he want to ${dog.activity}`;
console.log(speak);