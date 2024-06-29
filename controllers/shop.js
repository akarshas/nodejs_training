const Product = require('../models/Product');

const getHomePage = (req, res, next) => {
  return Product.getAllProducts((products) => {
    res.render('shop', {
      pageTitle: 'Product Listing Page',
      pageUrl: '/',
      products: products,
    });
  });
};

module.exports = {
  getHomePage: getHomePage,
};
