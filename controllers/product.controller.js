const Product = require("../models/product.model");
const mongoose = require("mongoose");

// GET todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(404).json({ e: `Error en la consulta ${e}` });
  }
};

// GET producto por ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  // Verificamos si el id es un ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  try {
    const filtered_product = await Product.findById(id);
    if (!filtered_product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(filtered_product);
  } catch (e) {
    res.status(404).json({ err: `Error: ${e}` });
  }
};

// POST producto
const postnewProduct = async (req, res) => {
  const { name, price } = req.body;

  if (!name || name === "" || !price || price === "") {
    return res.status(404).json({ msg: "Invalid product" });
  }
  try {
    const newProduct = new Product({ name, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (e) {
    res.status(404).json({ err: `Invalid product: ${e}` });
  }
};

// DELETE producto por ID
const deleteProductById = async (req, res) => {
  const { id } = req.params;

  // Verificar ID válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json({ msg: `Producto eliminado ${deletedProduct}` });
  } catch (error) {
    res.status(500).json({ error: `Error al eliminar el producto ${e}` });
  }
};

// UPDATE producto
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: { name, price },
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: `Producto no encontrado` });
    }
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return rs
      .status(500)
      .json({ error: `Error al actualizar el producto ${e}` });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  postnewProduct,
  deleteProductById,
  updateProduct,
};
