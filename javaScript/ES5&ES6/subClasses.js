class Book {
    constructor(women, are, queens) {
        this.title = women;
        this.author = are;
        this.year = queens;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}

// magazine Subclass
class Magazine extends Book {
    constructor(women, are, queens, nah) {
        super(women, are, queens);
        this.month = nah;
    }
}

//instantiate Magazine 
let mag1 = new Magazine("EverLast", "Mario", "1999", "Feb");
console.log(mag1.getSummary())