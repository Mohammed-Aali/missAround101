let clunckCounter = 0;

function clunk(times) {
    let num = times;
    while (num > 0) {
        display("clunk");
        num = num - 1;
    }
}


function thingAmaJug(size) {
    let facky = 1;
    clunckCounter = 0;
    if (size == 0) {
        display("clank");
    } else if ( size == 1 ) {
        display("thunk");
    } else {
        while (size > 1) {
            facky = facky + 1;
            size = size - 1;
        }
        clunk(facky);
    }
}

function display(output) {
    console.log(output);
    clunckCounter = clunckCounter + 1;
}


thingAmaJug(4);
console.log(clunckCounter);