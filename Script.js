let bookArray = []
const book1 = new book("The Giver", "Lois Lowry", 240, true);

function book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + ", " + author + ", " + pages + ", " + read;
    }
}

function addBookToLibrary(book) {
    bookArray.push(book)
}

addBookToLibrary(book1);
console.log(book1.info());
console.log(bookArray);