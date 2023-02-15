function Book(banana, monkey, tree) {
    this.title = banana;
    this.author = monkey;
    this.year = tree;
}

//getSummary 
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`
}

//getTime
Book.prototype.getTime = function() {
    // get full years takes pranthasis 
    let years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years}`
}

// revise the year
Book.prototype.revised = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

//instantiate an object
const book1 = new Book("book one", "mohammed", 2021);
const book2 = new Book("Everlasting", "ali", 2021);

book2.revised(1999)
console.log(book2)

