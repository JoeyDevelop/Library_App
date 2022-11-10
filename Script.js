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

let books = []

const newBookBtn = document.querySelector(".add_Book");
newBookBtn.addEventListener("click", () => {
    newBook();
});

const cancelFormBtn = document.querySelector("#cancel_button");
cancelFormBtn.addEventListener("click", () => {
    cancelButton();
})

const submitBtn = document.querySelector("#submit_button");
submitBtn.addEventListener("click", (event) => {
    submitButton(event);
})

function newBook() {
    let form = document.querySelector("#form_container")
    form.style["visibility"] = "visible";
    let blur = document.querySelectorAll(".no_blur");
    blur[0].classList.add("blur");
    blur[1].classList.add("blur");
}

function cancelButton() {
    let form = document.querySelector("#form_container")
    form.style["visibility"] = "hidden";
    let blur = document.querySelectorAll(".no_blur");
    blur[0].classList.remove("blur")
    blur[1].classList.remove("blur")
    document.getElementById("form").reset();
}

function submitButton(event) {
    event.preventDefault();
    let content = document.querySelector("#content");

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.querySelector("#titlee").value;
    let titleNode = document.createElement("h3");
    titleNode.classList.add("info");
    titleNode.innerHTML = `Title: ${title}`

    const author = document.querySelector("#author").value;
    let authorNode = document.createElement("h3");
    authorNode.classList.add("info");
    authorNode.innerHTML = `Author: ${author}`

    const pages = document.querySelector("#pages").value;
    let pagesNode = document.createElement("h3");
    pagesNode.classList.add("info");
    pagesNode.innerHTML = `Pages: ${pages}`

    const read = document.querySelector('[name="read"]:checked').value;
    let readNode = document.createElement("h3");
    readNode.classList.add("info");
    readNode.innerHTML = `Read: ${read}`

    const book = new Book(title, author, pages, read);
    books.push(book);
    card.appendChild(titleNode);
    card.appendChild(authorNode);
    card.appendChild(pagesNode);
    card.appendChild(readNode);
    content.appendChild(card);
    cancelButton();
}

