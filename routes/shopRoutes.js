const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  const htmlString = `
        <html>
            <head><title>Product Listing</title></head>
    
            <body>
                <h1>Product Listing</h1>
            </body>
        </html>
      `;

  res.write(htmlString);
  res.end();

  //   next();
});

module.exports = router;
