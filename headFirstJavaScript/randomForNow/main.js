
function makeCar () {
    let make = ["chevy", "toyota", "lexus", "honda", "Pagani", "ferrari"];
    let models = ["corvette", "camery", "ls-500", "civic", "huaira", "laferrari"];
    let years = [2013, 2022, 2012, 2023, 2018, 2010];
    let colors = ["red", "blue", "tan", "yellow", "white"];
    let convertible = [true, false];

    let rand1 = Math.floor(Math.random() * make.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * 2);
    let rand6 = Math.floor(Math.random() * 5 ) + 1;

    let car = {
        make: make[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand6,
        convertible: convertible[rand5]
    }

    return car;
}

function displayCar(car) {
    console.log(`Your new car is a ${car.year} ${car.make} ${car.model}`);
};

displayCar(makeCar());