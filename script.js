let myLibrary = [new Book("Harry Potter", "J.K Rowling", 309, false), new Book("Frequency", "Penney Peirce", 400, false), new Book("American Psycho", "Bret Easton Ellis", 399, false)];

displayAllBooks();

const openFormButton = document.querySelector('.open-button')
const addBookButton = document.querySelector('.add-book');
const closeFormButton = document.querySelector('.close-form');




// Event listerers
openFormButton.addEventListener('click', showForm);
addBookButton.addEventListener('click', addBookToLibrary)
closeFormButton.addEventListener('click', hideForm);



// functions
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(`${this.title} by ${this.author} , ${this.pages} , ${this.read ? 'read' : 'not read yet'}`);
    }
}

function showForm() {
    document.querySelector('.form').style.display = 'block';
}

function hideForm() {
    document.querySelector('.form').style.display = 'none';
}

function clearForm() {
    document.querySelector('.form').reset();
}

function addBookToLibrary(e) {
    e.preventDefault();
    let newTitle = document.querySelector('#new-title').value;
    let newAuthor = document.querySelector('#new-author').value;
    let newPages = document.querySelector('#new-pages').value;
    let newRead = document.querySelector('#new-read').value.toLowerCase();

    newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);

    displayAllBooks();
    clearForm();
    hideForm();
}

function displayAllBooks() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div');
        book.setAttribute('data-index-number', i);
        book.classList.add('book');

        const removeBook = document.createElement('button');
        removeBook.classList.add('delete-book');
        removeBook.textContent = 'x';
        book.appendChild(removeBook);

        const bookTitle = document.createElement('h2');
        bookTitle.classList.add('title');
        bookTitle.textContent = `${myLibrary[i].title}`;
        book.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = `Author:   ${myLibrary[i].author}`;
        book.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.classList.add('pages');
        bookPages.textContent = `Pages:   ${myLibrary[i].pages}`;
        book.appendChild(bookPages);

        const bookReadOrNot = document.createElement('p');
        bookReadOrNot.classList.add('read');
        bookReadOrNot.textContent = `Read:   ${myLibrary[i].read}`;
        book.appendChild(bookReadOrNot);

        const changeBookStatus = document.createElement('button');
        changeBookStatus.classList.add('change-status', 'btn');
        changeBookStatus.textContent = 'Change Read Status';
        book.appendChild(changeBookStatus);

        main.appendChild(book);

        setClickEventOnDeleteButton();
        setClickEventOnChangeReadStatusButton();
    }

}
function setClickEventOnDeleteButton() {
    const deleteBookButton = document.querySelectorAll('.delete-book');

    for (let i = 0; i < deleteBookButton.length; i++) {
        deleteBookButton[i].addEventListener('click', deleteBook)
    }

}

function setClickEventOnChangeReadStatusButton() {
    const changeStatusButtons = document.querySelectorAll('.change-status');

    for (let i = 0; i < changeStatusButtons.length; i++) {
        changeStatusButtons[i].addEventListener('click', changeStatus);
    }
}

function changeStatus(e) {
    let indexOfBookStatusChange = e.target.parentNode.getAttribute('data-index-number');
    let statusOfCurrentBook = myLibrary[indexOfBookStatusChange].read;

    myLibrary[indexOfBookStatusChange].read = statusOfCurrentBook ? false : true;
    displayAllBooks();
}


function deleteBook(e) {
    console.log('delete function called')
    let indexToDelete = e.target.parentNode.getAttribute('data-index-number');
    console.log(indexToDelete)
    myLibrary.splice(indexToDelete, 1);
    displayAllBooks();
}


