// let s = "hello"
// console.log(typeof s)

// let s1 = new String("Hello");
// console.log(typeof s1)

// console.log(navigator)

const book0 ={
    title: "book one",
    author: "john dow",
    year: "2021",
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}

const book2 ={
    title: "book one",
    author: "jane dow",
    year: "2021",
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}
console.log(Object.values(book0))
console.log(Object.keys(book0))