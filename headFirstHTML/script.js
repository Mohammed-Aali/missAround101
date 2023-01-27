let dog = {
        weight: 90,
        name: "fido",
        breed: "mixed",
        loves: ["walking", "fetching balls"]
}
let fido = dog;

loseWeight(fido)

function loseWeight(dog) {
        let newWeight;
        newWeight = dog.weight - 10
        console.log(newWeight)
}