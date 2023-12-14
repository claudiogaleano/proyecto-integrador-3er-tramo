const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
require("dotenv").config();

// Configuración de Mongoose
mongoose.connect("tu_url_de_conexion_a_mongodb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/auth", router);
app.use("/posts", require("./routes/post"));
app.use("/comments", require("./routes/comment"));

const port = process.env.PORT || 3000;
app.listen(env.PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${env.PORT}`);
});
