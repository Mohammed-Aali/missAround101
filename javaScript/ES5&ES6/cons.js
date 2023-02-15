// constructor
function Book(banana, monkey, tree) {
    this.title = banana;
    this.author = monkey;
    this.year = tree;
}

//instantiate an object
const book1 = new Book("book one", "mohammed", 2023);
const book2 = new Book("Everlasting", "ali", 2023);

console.log(book1.getSummary())