const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.postnewProduct);
router.delete("/:id", productController.deleteProductById);
router.put("/:id", productController.updateProduct);

module.exports = router;
