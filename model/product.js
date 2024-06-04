const fs = require("fs");
const path = require("path");

const dataPath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

module.exports = class Products {
  constructor(model, image, price, title ) {
    this.model = model;
    this.image = image;
    this.price = price;
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(dataPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
