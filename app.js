// Selecting necessary elements from the DOM
const cardGrid = document.querySelector(".card-grid");
const bookTitle = document.querySelector("#title");
const authorName = document.querySelector("#author"); 
const bookPage = document.querySelector("#pages");
const bookStatus = document.querySelector("#status");
const addBook = document.querySelector(".add-btn");
const submitBtn = document.querySelector("#submit");
const cancelBtn = document.querySelector("#close");
const modalBox = document.querySelector(".modal-box");
const bookTotal = document.querySelector(".total");
const bookRead = document.querySelector(".read");
const bookUnread = document.querySelector(".unread");

// Initial book library with a default book
let myLibrary = [{
    title: "Story-time in Africa",
    author: "Carolyn Stuyvesant",
    page: 110,
    status: "Unread",
}];

// Book Constructor
class Book {
    constructor(title, author, page, status) {
        this.title = title;
        this.author = author;
        this.page = page;
        this.status = status;
    }
}

// Take info from form input & add new book to the library
function addNewBook() {
    if (bookTitle.value === "" || authorName.value === "" || bookPage.value === "" || bookStatus.value === "") 
    return;
    cardGrid.innerHTML = "";
    const newBook = new Book(bookTitle.value, authorName.value, bookPage.value, bookStatus.value);
    myLibrary.push(newBook);
    displayBooks();
    closeModal();
}

// Change book status
function changeBookStatus() {
    let dataIndex = this.getAttribute("data-index");
    if (myLibrary[dataIndex].status.toLowerCase() === "read") {
        myLibrary[dataIndex].status = "Unread";
    } else {
        myLibrary[dataIndex].status = "Read";
    }
    displayBooks();
}
displayBooks();

// Delete book from the Library
function deleteBook() {
    let dataIndex = this.getAttribute("data-index");
    myLibrary.splice(dataIndex, 1);
    cardGrid.innerHTML = "";
    displayBooks();
}

// Display
function displayBooks() {
    cardGrid.innerHTML = "";
    for (let [index, book] of myLibrary.entries()) {
        const card = document.createElement("div");
        card.classList.add("book-card");
        const txtTitle = document.createElement("h3");
        txtTitle.textContent = `${book.title}`;
        const txtAuthor = document.createElement("p");
        txtAuthor.textContent = `by ${book.author}`;
        const txtPage = document.createElement("p");
        txtPage.textContent = `${book.page} pages`;
        const txtStatus = document.createElement("p");
        txtStatus.textContent = book.status;

        const changeStatusBtn = document.createElement("button");
        changeStatusBtn.textContent = "S";
        changeStatusBtn.classList.add("status-btn");
        changeStatusBtn.setAttribute("data-index", index);
        changeStatusBtn.addEventListener("click", changeBookStatus);

        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.classList.add("delete-btn");
        delBtn.setAttribute("data-index", index);
        delBtn.addEventListener("click", deleteBook);

        card.appendChild(txtTitle);
        card.appendChild(txtAuthor);
        card.appendChild(txtPage);
        card.appendChild(txtStatus);
        card.appendChild(changeStatusBtn);
        card.appendChild(delBtn);

        cardGrid.appendChild(card);
    }
    displayStats();
}

// Update & display stats
