const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById } = require("../controller/productController");

//@desc GET all product from DB
//@route GET /api/products
router.get("/", getAllProducts);

//@desc GET a product by id from DB
//@route GET /api/products/:id
router.get("/:id", getProductById);

module.exports = router;