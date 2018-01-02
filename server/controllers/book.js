const books = require('../models/books');

exports.getBooksById = (item) =>{
	let book = books[item];
	if (book === undefined) {
		return {

			id: "Nothing",

      		bookTitle: "Nothing",

      		author: "Nothing"
		}
	}else{
		return book;
	}
}

exports.getFavbook = (req, res) =>{
	let booksId = req.params.booksId;
	let books = this.getBooksById(booksId);
	res.send(books)
}

exports.create = (req, res) => {
	let item = req.body;
	item.id = books.length + 1;

	books.push(item);
	//res.json("book added successfully");
	res.redirect('/api/books')
}


exports.getAllbooks = (req, res) => {
	let Books = books;
	res.send(Books);
}

exports.modifyBooks = (req, res) => {
	let book = books[req.params.booksId];
	Object.assign(book, req.body);
	res.send(book);
}