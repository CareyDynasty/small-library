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
