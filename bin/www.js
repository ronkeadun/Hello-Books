const http = require('http');
const app = require('../app'); // The express app
const db = require('../db');

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);



const server = http.createServer(app); //passing the express app into the server created as an handler
server.listen(port, () => {
	console.log('listening on port', server.address().port);
	/*db.sync()
		.then(message =>{
			console.log('and db is synced');
		})*/
});