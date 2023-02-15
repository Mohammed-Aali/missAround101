class Book {
    constructor(women, are, queens) {
        this.title = women;
        this.author = are;
        this.year = queens;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
    // get the time passed since release
    getTime() {
        // get full years takes pranthasis 
        let years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years}`
    }
    
    // revise the year
    reviseTo(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return "Barns & Nobles"
    }
}

// instantiate Object
const book1 = new Book("Everlast", "Mario", 1999)

book1.reviseTo(2015);
console.log(Book.topBookStore());