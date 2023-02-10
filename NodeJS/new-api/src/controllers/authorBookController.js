let books = require('../data/books.json');
let authors = require('../data/authors.json');

exports.postAuthorBook = (req, res) => {

    const findIndexItem = books.findIndex(book => book.id === +req.body.book_id);
    const findBook = books.find(book => book.id === +req.body.book_id);

    findBook.author_id = +req.body.author_id;

    books.splice(findIndexItem, 1, findBook);
    res.send("Successfully updated!");
};

exports.deleteAuthorBook = (req, res) => {

    const findIndexItem = books.findIndex(book => book.id === +req.params.idAuthorBook);
    const findBook = books.find(book => book.id === +req.params.idAuthorBook);

    findBook.author_id = null;

    books.splice(findIndexItem, 1, findBook);
    res.send("Successfully author deleted!");
}
