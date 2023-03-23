let myLibrary = [new Book("Harry Potter", "J.K Rowling", 309, false), new Book("Frequency", "Penney Peirce", 400, false), new Book("American Psycho", "Bret Easton Ellis", 399, false)];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(`${this.title} by ${this.author} , ${this.pages} , ${this.read ? 'read' : 'not read yet'}`);
    }
}


function addBookToLibrary(title, author, pages, read) {
    const addBookButton = document.getElementsByClassName('')
    newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);

    displayAllBooks();
}

function displayAllBooks() {
    const main = document.querySelector('main');
    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div');
        book.classList.add('book');

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

        main.appendChild(book);
    }

}

displayAllBooks();