let books = require('../data/books.json');
let authors = require('../data/authors.json');

exports.getAuthors = (req, res) => {
    for (const author of authors) {
        const allBooks = books.map(book => ({ id: book.id, name: book.name, author_id: book.author_id})).filter(book => book.author_id === author.id);
        author.total_books = allBooks.length;
        author.all_books = allBooks;
    }
    
    const infoAuthors = {
        total: authors.length,
        authors
    };

    res.send(infoAuthors) ;
}

exports.postAuthors = (req, res) => {
    authors.push(req.body);
    res.send("Successfully posted!")
}

exports.putAuthors = (req, res) => {
    const findItem = authors.findIndex(author => author.id === +req.params.idAuthor);
    authors.splice(findItem, 1, req.body);
    res.send("Successfully updated!");
}

exports.deleteAuthors = (req, res) => {
    const findItem = authors.findIndex(author => author.id === +req.params.idAuthor);
    authors.splice(findItem, 1);
    res.send("Successfully deleted!");
}