class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {
        const bookStored = [
            { title: "Book One", author: "John Doe", isbn: "12345" },
            { title: "Book Two", author: "John Doe", isbn: "12345" }
        ]
        const books = bookStored;
        books.forEach(book => UI.addBook(book));
    }

    static addBook(book) {
        const list = document.querySelector("#book-list");
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
        <td>*</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-primary delete">X</a></td>`

        list.appendChild(tableRow);
    }

    static deleteBook(el) {
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks);
document.addEventListener("click", (e) => {
    console.log(e)
    UI.deleteBook(e.target)
})