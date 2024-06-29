// Create a server
const http = require('http');

const requestHandler = require('./routes');

// GET /add-product FORM Input Field , Button, On Submit
// On submit - Text File write - / Url redirect

// 404 page

const server = http.createServer(requestHandler);
server.listen(3001);
