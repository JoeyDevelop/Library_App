let bookArray = []
let cardArray = []

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return this.title + ", " + this.author + ", " + this.pages + ", " + this. read;
        };
    }
}

// const book1 = new Book("The Giver", "Lois Lowry", 240, "Yes");
// const book2 = new Book("The Dev", "Joey", 300, true);
// const book3 = new Book("The Pharmacist", "Harrill", 287, false);

function addBookToLibrary(book) {
    bookArray.push(book)
}

let elements = document.getElementsByClassName("card");
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

console.log(bookArray);

function addBlur() {
    let form = document.querySelector("#form_container")
    form.style["visibility"] = "visible";
    let blur = document.querySelectorAll(".no_blur");
    blur[0].classList.add("blur");
    blur[1].classList.add("blur");
}

function cancel(){
    let form = document.querySelector("#form_container");
    form.style["visibility"] = "hidden";
    let blur = document.querySelectorAll(".no_blur");
    blur[0].classList.remove("blur");
    blur[1].classList.remove("blur");
    document.getElementById("form").reset();
}

let newBookButton = document.querySelector(".add_Book");
newBookButton.addEventListener("click", (event) => {
    addBlur();
    event.preventDefault();
});

let cancelButton = document.getElementById("cancel_button");
cancelButton.addEventListener("click", (event) => {
    cancel();
    event.preventDefault();
});

let submitButton = document.querySelector("#submit_button")
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector('[name="read"]:checked').value;
    let book = new Book (title, author, pages, read);
    addBookToLibrary(book);
    console.log(bookArray, cardArray)
    if (cardArray.length < bookArray.length) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute('id', 'card');
        cardArray.push("#card");
        console.log(cardArray)
        document.getElementById("content").appendChild(card);
        } else {
            return
        }
    let elements = document.getElementsByClassName("card");
    for (let i = 0; i < elements.length; i++) {
        let title = bookArray[i].title;
        let author = bookArray[i].author;
        let pages = bookArray[i].pages;
        let read = bookArray[i].read;
            card.innerHTML = `<h3 class="info">
            Title: ${title}<br><br>
            Author: ${author}<br><br>
            Pages: ${pages}<br><br>
            Read: ${read} </h3>`;

            // card[i].innerHTML = `<h3 class="info">
            // Title: ${title}<br><br>
            // Author: ${author}<br><br>
            // Pages: ${pages}<br><br>
            // Read: ${read} </h3>`;
    }
})
