const fs = require('fs');

const requestHandler = (req, res) => {
  const method = req.method;
  const url = req.url;
  console.log({ method, url });

  // Home Page
  if (url == '/' && method == 'GET') {
    res.write('<html><head><title>Product Listing Page</title></head>');
    res.write('<body><h1>Product Listing Page</h1></body></html>');
    return res.end();
  }

  // Add product
  if (url == '/add-product' && method == 'GET') {
    res.write('<html><head><title>Add Product</title></head>');
    res.write('<body><h1>Product Listing Page</h1>');
    res.write(
      '<form action="/add-product" method="POST"><input name="product" /><button type="submit">Submit</button></form>'
    );
    res.write('</body></html>');
    return res.end();
  }

  // Handling POST request
  if (url == '/add-product' && method == 'POST') {
    console.log('Adding Product', req.body);

    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    return req.on('end', () => {
      const message = Buffer.concat(body).toString().split('=')[1];
      console.log('message', message);

      fs.writeFileSync('products.txt', message);

      // redirect
      res.setHeader('Location', '/');
      res.statusCode = 302;
      return res.end();
    });
  }

  res.write('<html><head><title>Page Not Found</title></head>');
  res.write('<body><h1>Page Not Found</h1></body></html>');
  res.end();
};

module.exports = requestHandler;
