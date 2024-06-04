// Push a product to DB.
const express = require("express");
const path = require("path");
const { getAddProduct, postAddProduct } = require("../controller/products");

const router = express.Router();
// we need to create certain routes:

// /admin/add-product
router.get("/add-product", getAddProduct);

// /admin/product
router.post("/add-product", postAddProduct);

exports.routes = router;
