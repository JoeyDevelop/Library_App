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
    card.setAttribute('id', 'card');
    document.getElementById("content").appendChild(card);
});

let elements = document.getElementsByTagName('div');
for (let i = 0; i < elements.length; i++) {
    let title = bookArray[i].title;
    let author = bookArray[i].author;
    let pages = bookArray[i].pages;
    let read = bookArray[i].read;
    card[i].innerHTML = `<h3 class="info">
    Title: ${title}<br><br>
    Author: ${author}<br><br>
    Pages: ${pages}<br><br>
    Read: ${read} </h3>`;
}

console.log(book1.info());
console.log(bookArray);