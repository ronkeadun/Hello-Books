const Sequelize = require('sequelize');
//const connection = new Sequelize('postgres://localhost:5432/books');
const connection = new Sequelize('books', 'ronke', '3377', {
  host: 'localhost',
  dialect: 'postgres',
});

connection.define('booklist', {
	bookTitle: {
		type: Sequelize.STRING	
	},
	author: {
		type: Sequelize.STRING
	}
})

connection.authenticate()
	.then(message =>{
		console.log('Connection has been established successfully.');
	}).catch(err =>{
		console.error('Unable to connect to the database:', err)
	});

module.exports = connection;  