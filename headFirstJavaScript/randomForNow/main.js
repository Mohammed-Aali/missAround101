function findCarInLot(car) {
    let i = 0;
   while(i < lot.length){
    if (car === lot[i]) {
    return i;
    }
    i++;
    }
    return -1;
   }
   var chevy = {
    make: "Chevy", 
    model: "Bel Air"
   };
   var taxi = {
    make: "Webville Motors", 
    model: "Taxi"
   };
   var fiat1 = {
    make: "Fiat", 
    model: "500"
   };
   var fiat2 = {
    make: "Fiat", 
    model: "500"
   };
   var lot = [chevy, taxi, fiat1, fiat2];

let loc1 = findCarInLot(fiat2);
console.log(loc1);
let loc2 = findCarInLot(taxi);
console.log(loc2);
let loc3 = findCarInLot(chevy);
console.log(loc3);
let loc4 = findCarInLot(fiat1);
console.log(loc4);
   