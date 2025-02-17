const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.routes.js");

// Middlewares
app.use(express.json());

// ** Routes **
app.use("/api/products", productRoutes);

// Conexión MongoDB
const MONGO_URI = "mongodb://127.0.0.1:27017/productos";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
  })
  .catch((e) => console.error("❌ Error al conectar a MongoDB:", e));

// Conexión servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
