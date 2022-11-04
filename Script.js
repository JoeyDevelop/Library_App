let bookArray = []
const book1 = new book("The Giver", "Lois Lowry", 240, true);
const book2 = new book("The Dev", "Joey", 300, true);
const book3 = new book("The Pharmacist", "Harrill", 287, false);

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
addBookToLibrary(book2);
addBookToLibrary(book3);

bookArray.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    document.getElementById("content").appendChild(card);
});

console.log(book1.info());
console.log(bookArray);