const library = {
    nextId: 3,
    books: [{
            id: 1,
            name: "Sherlock Holmes",
            author: "Arthur Doyle"
        },{
            id: 2,
            name: "Sherlock Holmes 2",
            author: "Arthur Doyle"
        }
    ]
}

const findBook = (name) => {
    for(let book of library.books) {
        if(book.name === name) {
            return book;
        }
    }
    return null;
}
// library (db) service
module.exports = {
    /* GET all books. */
    getAll: () => {
        return library.books
    },
    /* POST a book. */
    addBook: (bookReq) => {
        if(findBook(bookReq.name)) {return;}
        library.books.push({
            id: library.nextId,
            name: bookReq.name,
            author: bookReq.author
        });
        library.nextId += 1;
    },
    /* PUT a book. */
    modifyBook: (bookReq) => {
        let book =  findBook(bookReq.name);
        if(!book) {return;}
        book.author = bookReq.author
    },
    /* DELETE a book. */
    deleteBook: (bookReq) => {
        library.books = library.books.filter((book) => {return book.name !== bookReq.name})
    }
}