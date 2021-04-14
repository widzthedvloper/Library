let bookForm = document.querySelector('.form');
let addNewBook = document.querySelector('#add-book');
let submit = document.querySelector('.submit');
let deleteBtn = document.getElementsByClassName('btn-danger')

// Event listener for clicking Add new book button to dsipaly form.
addNewBook.onclick = function () {
    bookForm.style.display = 'block';
};

submit.onclick = function () {
    bookForm.style.display = 'none';
};

// Book object constructor
function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Library array

let myLibrary = [];

// Add new book to Library array

function addBookToLibrary() {
    let bookTitle = document.querySelector('.title').value;
    let bookAuthor = document.querySelector('.author').value;
    let bookPages = document.querySelector('.pages').value;
    let bookRead = document.querySelector('.read').value;

    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
    displayBook();
};

// Connect browser form
let formSubmit = document.querySelector('.submit');
formSubmit.addEventListener("click", addBookToLibrary);


// display book on browser

function displayBook() {
    document.querySelector("#book-container").innerHTML = "";
    let i = 0 
    myLibrary.forEach(book => { 

        let bookDiv = document.createElement('div');
        bookDiv.setAttribute('class', 'card');
        let titleparagraph = document.createElement('p');
        let titleText = document.createTextNode(book.title);
        titleparagraph.appendChild(titleText);
        
        let authorparagraph = document.createElement('p');
        let authorText = document.createTextNode(book.author);
        authorparagraph.appendChild(authorText);

        let pageparagraph = document.createElement('p');
        let pageText = document.createTextNode(book.pages);
        pageparagraph.appendChild(pageText);

        let readparagraph = document.createElement('p');
        let readText = document.createTextNode(book.read);
        readparagraph.appendChild(readText);

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn btn-danger');
        let deleteBook = document.createTextNode('Delete Book');
        deleteButton.id = i;

        deleteButton.addEventListener('click', function(){
            myLibrary.splice(this.id, 1);
            displayBook();
        });

        deleteButton.appendChild(deleteBook);


        bookDiv.appendChild(titleparagraph);
        bookDiv.appendChild(authorparagraph);
        bookDiv.appendChild(pageparagraph);
        bookDiv.appendChild(readparagraph);
        bookDiv.appendChild(deleteButton);

        let bookContainer = document.getElementById('book-container');
        bookContainer.appendChild(bookDiv);

        ++i;
        
    }); 

}
