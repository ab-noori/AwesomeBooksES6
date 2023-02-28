import Book from './book.js';
import Store from './store.js';
import UI from './ui.js';

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent default submit
  e.preventDefault();

  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // valitdate empty form
  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in all fields!');
  } else {
    // making object of Book class
    const book = new Book(title, author, isbn);

    // add book to UI
    UI.addBookToList(book);

    // add book to store
    Store.addBook(book);

    // clear fields
    UI.clearFields();
  }
});

// Event: Delete a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove book from UI
  UI.deleteBook(e.target);

  // remove book from Store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

// Event: Navigate between sections
document.querySelectorAll('.nav-link')
  .forEach((links) => links.addEventListener('click', () => {
    UI.getPageContent(links.id);
  }));
