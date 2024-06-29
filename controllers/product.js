const Product = require('../models/Product');

const getAddProductPage = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add a product',
    pageUrl: '/add-product',
  });
};

const addProduct = (req, res, next) => {
  const p = new Product(req.body.product);
  p.save(() => {
    res.statusCode = 302;
    res.redirect('/');
  });
};

module.exports = {
  getAddProductPage: getAddProductPage,
  addProduct: addProduct,
};
