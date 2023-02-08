let books = require('../data/books.json');
let authors = require('../data/authors.json');

exports.getBooks = (req, res) => {
    for (const book of books) {
        book.author = authors.find(author => author.id === book.author_id)
    }

    const infoBook = {
        total: books.length,
        books,
    };

    res.send(infoBook);
} 

exports.postBooks = (req, res) => {
    books.push(req.body);
    res.send("Successfully posted!");
}

exports.putBooks = (req, res) => {
    const findItem = books.findIndex(book => book.id === +req.params.idBook);
    books.splice(findItem, 1, req.body);
    res.send("Successfully updated!");
}

exports.deleteBooks = (req, res) => {
    const findItem = books.findIndex(book => book.id === +req.params.idBook);
    books.splice(findItem, 1);
    res.send("Successfully deleted!");
}

