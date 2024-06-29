const Product = require('../models/Product');

const getHomePage = (req, res, next) => {
  res.render('shop', {
    pageTitle: 'Product Listing Page',
    pageUrl: '/',
    products: Product.getAllProducts(),
  });
};

module.exports = {
  getHomePage: getHomePage,
};
