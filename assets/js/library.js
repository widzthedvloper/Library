let bookForm = document.querySelector('.form');
let addNewBook = document.querySelector('button');

// Event listener for clicking Add new book button to dsipaly form.
addNewBook.onclick = function () {
    bookForm.style.display = 'block';
};

// Book object constructor
function Book(title, author, pages, read=false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

// Library array

let myLibrary = [];

// Add new book to Library array

function addBookToLibrary(book) {
    myLibrary.push(book);
};

newBook = new Book('The Hermit', 'George Gbenle', 345, true);
addBookToLibrary(newBook);

// display book on browser

let displayBook = book => {
    myLibrary.forEach(function(book) {
        let bookTitle = document.querySelector('.title');
        bookTitle.textContent = `${book.title}`;

        let bookAuthor = document.querySelector('.author');
        bookAuthor.textContent = `${book.author}`;

        let bookPages = document.querySelector('.pages') 
        bookPages.textContent = `${book.pages}`;

        let bookRead = document.querySelector('.read')
        bookRead.textContent = `${book.read}`;
    });
};

console.log(displayBook(newBook));