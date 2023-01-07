let passengers = [ 
    {name: `Jane Deloop`, paid: true},
    {name: `Dr. Eval`, paid: false},
    {name: `Sue property`, paid: false},
    {name: `John funcall`, paid: false}
 ] 

 function checkPaid(array) {
    let hasNotPaid = [];
    for (let i = 0; i < array.length; ++i) {
        if (!array[i].paid) {
           hasNotPaid.push(array[i].name);
        }
    }
    return hasNotPaid;
 }
 console.log(checkPaid(passengers))

 function checkFlyList(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2; j++) {
            if (array1[i].name === array2[j]) {
                return array2[j] + `this passanger is on the no fly list`
            }
        }
        return `plane is good for takeoff`
    }
 }

 function checkPassengers(array) {
    let allOnFlight = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].paid) {
            
            allOnFlight.push(array[i].name);
            return allOnFlight;
        } else {
            alert(`plane is not clear for takeOff`)
        }
    }
 } 







