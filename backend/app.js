const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

// Configuración de Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/post"));
app.use("/comments", require("./routes/comment"));

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(env.PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${env.PORT}`);
});
