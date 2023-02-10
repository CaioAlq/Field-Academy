const express = require('express');
const route = express.Router();
const booksController = require('./controllers/booksController');
const authorsController = require('./controllers/authorsController');
const authorBookController = require('./controllers/authorBookController');

route.get('/books', booksController.getBooks);
route.post('/books', booksController.postBooks);
route.put('/books/:idBook', booksController.putBooks);
route.delete('/books/:idBook', booksController.deleteBooks);

route.get('/authors', authorsController.getAuthors);
route.post('/authors', authorsController.postAuthors);
route.put('/authors/:idAuthor', authorsController.putAuthors);
route.delete('/authors/:idAuthor', authorsController.deleteAuthors);

route.post('/author-book', authorBookController.postAuthorBook);
route.delete('/author-book/:idAuthorBook', authorBookController.deleteAuthorBook);

module.exports = route;