const http = require('http');
const app = require('../app'); // The express app

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);



const server = http.createServer(app); //passing the express app into the server created as an handler
server.listen(port, () => {
	console.log('listening on port', server.address().port);
});