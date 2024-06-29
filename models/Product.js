const fs = require('fs');
const path = require('path');
// const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save(cb) {
    fs.readFile(
      path.join(__dirname, '..', 'data', 'products.json'),
      (err, fileContent) => {
        let products;
        console.log(err, fileContent);
        if (err) {
          products = [];
        } else {
          products = JSON.parse(fileContent);
        }
        products.push(this);
        fs.writeFile(
          path.join(__dirname, '..', 'data', 'products.json'),
          JSON.stringify(products),
          (err) => {
            cb();
          }
        );
      }
    );
  }

  static getAllProducts(cb) {
    fs.readFile(
      path.join(__dirname, '..', 'data', 'products.json'),
      (err, fileContent) => {
        let products;
        console.log(err, fileContent);
        if (err) {
          products = [];
        } else {
          products = JSON.parse(fileContent);
        }

        cb(products);
      }
    );
  }
};
