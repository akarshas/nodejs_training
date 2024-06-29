const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  const htmlString = `
        <html>
            <head><title>Add product</title></head>
    
            <body>
                <h1>Add product</h1>
                <form method="POST" action="/add-product">
                  <input name="product"/>
                  <button type="submit">Submit</button>
                </form>
            </body>
        </html>
      `;

  res.write(htmlString);
  res.end();
});

router.post('/add-product', (req, res, next) => {
  console.log('product', req.body.product);
  res.statusCode = 302;
  res.redirect('/');
});

module.exports = router;
