// object of protos
const bookProtos = {
    getSummarry: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    },
    getTime: function() {
        let years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years}`
    }
}

// create objects in the weirdest way
// const book1 = Object.create(bookProtos);
// book1.title = "Everlast"
// book1.author = "Ali"
// book1.year = "1999"

const book1 = Object.create(bookProtos, {
    title: {value: "Everlast"},
    author: {value: "Mario"},
    year: {value: 1999},
});

console.log(book1)