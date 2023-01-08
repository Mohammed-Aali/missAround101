var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },
 { name: "Dr. Evel", paid: true, ticket: "firstclass" },
 { name: "Sue Property", paid: false, ticket: "premium economy" },
 { name: "John Funcall", paid: true, ticket: "coach" } ];

 function serveCustomer(passengers) {
    let getDrinkOrderFunction = createDrinkOrder(passengers);
    let getMovie = showMovie(passengers);
    let getFood = feedMe(passengers);
    getDrinkOrderFunction();
    // get dinner order
    getFood();
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // show movie
    getMovie();
    getDrinkOrderFunction();
    // pick up trash

 }
function showMovie(passengers) {
    let moveiToWatch;
    if (passengers) {
        moveiToWatch = function () {
            alert(`movie: darkknight`)
        }
    }
    return moveiToWatch;
}
function feedMe(passengers){
    let getFood;
    if(passengers){
        getFood = function() {
            alert(`food is coming in hot`);
        }
    }
    return getFood;
}

 function createDrinkOrder(passengers) {
    let orderFunction;
    if(passengers.ticket === `firstclass`) {
        orderFunction = function() {
            alert(`Would you like cocktail or wine?`)
        }
    } else if (passengers.ticket === `premium economy`){
        orderFunction = function() {
            alert(`Would you water or cola or perhaps wine?`)
        }

    } else {
        orderFunction = function() {
            alert(`Would you water or cola?`)
        }
    }
    return orderFunction;
 }

function servePassenger(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassenger(passengers);





