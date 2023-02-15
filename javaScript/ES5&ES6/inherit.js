// constructor
function Book(banana, monkey, tree) {
    this.title = banana;
    this.author = monkey;
    this.year = tree;
}

//instantiate an object
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`
}

function Magazie(title, author, year, month) {
    Book.call(this, title, author, year)

    this.month = month;
}

// inherit prototype
Magazie.prototype = Object.create(Book.prototype);

//instantiante Magazie Object
let mag1 = new Magazie("Everlast", "john doe", 2018, 'Jan')

//use Magazie prototype
Magazie.prototype.constructure = Magazie;



console.log(mag1)