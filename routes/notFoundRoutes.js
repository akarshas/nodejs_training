const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  const htmlString = `
        <html>
            <head><title>Page Not Found</title></head>
    
            <body>
                <h1>Page Not Found</h1>
            </body>
        </html>
      `;

  res.write(htmlString);
  res.end();
});

module.exports = router;
