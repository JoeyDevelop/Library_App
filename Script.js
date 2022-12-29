let books = []

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

const newBookBtn = document.querySelector(".add_Book");
newBookBtn.addEventListener("click", () => {
    let form = document.querySelector("#form_container")
    form.style["visibility"] = "visible";
    let blur = document.querySelectorAll(".no_blur");
    blur[0].classList.add("blur");
    blur[1].classList.add("blur");
});

const cancelFormBtn = document.querySelector("#cancel_button");
cancelFormBtn.addEventListener("click", () => {
    cancelButton();
})

function cancelButton() {
    let form = document.querySelector("#form_container")
    form.style["visibility"] = "hidden";
    let blur = document.querySelectorAll(".no_blur");
    blur[0].classList.remove("blur")
    blur[1].classList.remove("blur")
    document.getElementById("form").reset();
}

function submitButton(event, i) {
    event.preventDefault();
    let content = document.querySelector("#content");

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute('data-index', `${i}`)

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

    const space = document.createElement("div");
    space.classList.add("space");

    const remove = document.createElement("button");
    remove.setAttribute('id', 'remove_btn');
    remove.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 
    12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 
    7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 
    20 15.6 19.4 16.9 18.3Z" /></svg>`
    remove.addEventListener("click", () => {
        content.removeChild(card);
        books.splice(card, 1)
    })

    const readBtn = document.createElement("button");
    readBtn.setAttribute('id', 'read_button');
    readBtn.innerHTML = "Read?";
    readBtn.addEventListener("click", () => {
        if (readNode.innerHTML === "Read: Yes") {
            readNode.innerHTML = "Read: No"
        } else {
            readNode.innerHTML = "Read: Yes"
        }
    })

    const book = new Book(title, author, pages, read);
    books.push(book);
    card.appendChild(titleNode);
    card.appendChild(authorNode);
    card.appendChild(pagesNode);
    card.appendChild(readNode);
    card.appendChild(space);
    space.appendChild(remove);
    space.appendChild(readBtn);
    content.appendChild(card);
    cancelButton();
}