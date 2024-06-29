const express = require('express');
const path = require('path');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  // console.log('products', products);
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add a product',
    pageUrl: '/add-product',
  });
});

router.post('/add-product', (req, res, next) => {
  products.push(req.body.product);
  res.statusCode = 302;
  res.redirect('/');
});

module.exports = {
  router: router,
  products: products,
};
