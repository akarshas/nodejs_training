const express = require('express');
const path = require('path');

const adminData = require('./adminRoutes');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('products', adminData.products);
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  res.render('shop', {
    pageTitle: 'Product Listing Page',
    pageUrl: '/',
  });
});

module.exports = router;
