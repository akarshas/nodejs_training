// Create a server
const http = require('http');

// server port 3001 listen
// Listen to incoming request
// Send back response

const requestHandler = (req, res) => {
  const method = req.method;
  const url = req.url;

  if (url == '/' && method == 'GET') {
    res.write('<html><head><title>Product Listing Page</title></head>');
    res.write('<body><h1>Product Listing Page</h1></body></html>');
    res.end();
  }
};
const server = http.createServer(requestHandler);
server.listen(3001);
