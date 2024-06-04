const Product = require("../model/product");

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    path: "/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.model, req.body.image, req.body.price, req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      path: "/",
      pageTitle: "Products page",
      prods: products,
      hasProducts: products.length > 0,
    });
  });
};

exports.errorController = (req, res) => {
  res.status(404).render("404", { pageTitle: "404-Page not found" });
};
