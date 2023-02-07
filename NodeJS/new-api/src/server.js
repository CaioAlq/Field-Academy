const express = require('express');
let books = require('./data/books.json');
let authors = require('./data/authors.json');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/books', (req, res) => {

    for (const book of books) {
        book.author = authors.find(author => author.id === book.author_id)
    }

    const infoBook = {
        total: books.length,
        books,
    };

    res.send(infoBook);
});


app.post('/books', (req, res) => {
    books.push(req.body);
    res.send("Post success!");
});

app.listen(3000, () => console.log("http://localhost:3000"));