const express = require('express');
const route = express.Router();
const booksController = require('./controllers/booksController');
const authorsController = require('./controllers/authorsController');

route.get('/books', booksController.getBooks);
route.post('/books', booksController.postBooks);
route.put('/books/:idBook', booksController.putBooks);
route.delete('/books/:idBook', booksController.deleteBooks);

route.get('/authors', authorsController.getAuthors);
route.post('/authors', authorsController.postAuthors);

module.exports = route;