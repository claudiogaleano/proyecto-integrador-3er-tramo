const User = require("../models/User");

const authController = {
  register: async (req, res) => {
    // Lógica para registrar un nuevo usuario
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    // Lógica para iniciar sesión
    try {
      // Implementa la lógica de autenticación según tus necesidades
      res.status(200).json({ message: "Inicio de sesión exitoso" });
    } catch (error) {
      res.status(401).json({ error: "Credenciales inválidas" });
    }
  },
};

module.exports = authController;
