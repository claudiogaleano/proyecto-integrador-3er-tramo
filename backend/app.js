const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Configuración de Mongoose
mongoose.connect("tu_url_de_conexion_a_mongodb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
