const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rutas relacionadas con la autenticación
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
