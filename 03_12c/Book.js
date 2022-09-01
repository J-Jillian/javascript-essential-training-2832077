class Book {
  constructor(title, author, categories, currentPage, readStatus) {
    this.title = title;
    this.author = author;
    this.categories = categories;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
  }
  updateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }
  updateReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
  }
}

export default Book;
