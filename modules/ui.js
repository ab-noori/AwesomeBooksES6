// UI Class: Handle UI Tasks

import Store from './store.js';

class UI {
  static displayBooks = () => {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList = (book) => {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
        `;

    list.appendChild(row);
  }

  static deleteBook = (el) => {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  static getPageContent = (page) => {
    switch (page) {
      case '-list-book':
        document.getElementById('list-book').classList.add('show');
        document.getElementById('add-book').classList.remove('show');
        document.getElementById('contact').classList.remove('show');
        break;
      case '-add-book':
        document.getElementById('list-book').classList.remove('show');
        document.getElementById('add-book').classList.add('show');
        document.getElementById('contact').classList.remove('show');
        break;
      case '-contact':
        document.getElementById('list-book').classList.remove('show');
        document.getElementById('add-book').classList.remove('show');
        document.getElementById('contact').classList.add('show');
        break;
      default:
        document.getElementById('list-book').classList.add('show');
        document.getElementById('add-book').classList.remove('show');
        document.getElementById('contact').classList.remove('show');
        break;
    }
  }
}

export default UI;