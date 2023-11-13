class Book {
  constructor(title, description, author) {
    this.title = title;
    this.description = description;
    this.author = author;
  }
}

class BookManager {
  constructor() {
    this.books = [];
  }

  addBook(bookInfo) {
    const book = new Book(bookInfo.title, bookInfo.description, bookInfo.author);
    this.books.push(book);
    return book;
  }

  getBooks() {
    return this.books;
  }

  removeBookById(id) {
    this.books = this.books.filter(book => book.id !== id);
  }

  getBookById(id) {
    return this.books.find(book => book.id === id);
  }

  updateBookById(id, info) {
    const bookIndex = this.books.findIndex(book => book.id === id);

    if (bookIndex !== -1) {
      const updatedBook = Object.assign({}, this.books[bookIndex], info);
      this.books[bookIndex] = updatedBook;
      return updatedBook;
    }

    return null; // Retorna null se o livro não for encontrado
  }
}

// Exemplo de uso
const bookManager = new BookManager();

const book1 = bookManager.addBook({
  title: 'Livro 1',
  description: 'Descrição do Livro 1',
  author: 'Autor 1',
});

const book2 = bookManager.addBook({
  title: 'Livro 2',
  description: 'Descrição do Livro 2',
  author: 'Autor 2',
});

console.log('Lista de Livros:', bookManager.getBooks());

bookManager.removeBookById(book1.id);
console.log('Lista de Livros após remover o Livro 1:', bookManager.getBooks());

const updatedBook = bookManager.updateBookById(book2.id, {
  title: 'Livro 2 Atualizado',
  author: 'Novo Autor',
});

console.log('Livro 2 Atualizado:', updatedBook);
