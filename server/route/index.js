const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const booksController = require('../controllers/book');

module.exports = (app) => {
	//endpoint to get a list of books
	app.get('/api/books', booksController.getAllbooks);

	

	//endpoint to get users favourite book
	app.get('/api/books/:booksId/favbooks', booksController.getFavbook);

	//endpoint to add new books
	app.post('/api/books', booksController.create);


	//endpoint to modify a book
	app.put('/api/books/:booksId', booksController.modifyBooks);

	//endpoint to borrow a book
	app.post('/api/users/:userId/borrow/:bookId', (req, res) => {
		res.send({type: 'POST'})
	});

	//endpoint to return a book
	app.post('/api/users/:userId/return/:booksId', (req, res) => {
		res.send({type: 'POST'})
	});

	//endpoint to accept a request to borrow a book
	app.put('/api/users/:userId/borrow/:bookId', (req, res) => {
		res.send({type: 'PUT'})
	});

	//endpoint to reject a request return a book
	app.put('/api/users/:userId/return/:booksId', (req, res) => {
		res.send({type: 'PUT'})
	});

	//endpoint to review a book
	app.post('/api/users/:userId/review/:booksId', (req, res) => {
		res.send({type: 'POST'})
	});

	//endpoint to mark a favourite book
	app.post('/api/users/:userId/fav/:booksId', (req, res) => {
		res.send({type: 'POST'})
	});

	//endpoint to get books with the most upvotes
	app.get('/api/books/sort', (req, res) => {
		res.send({type: 'GET'})
	});

};

