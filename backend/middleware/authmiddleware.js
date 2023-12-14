const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  // Obtén el token del encabezado de la solicitud
  const token = req.header("Authorization");

  // Verifica si el token existe
  if (!token) {
    return res.status(401).json({
      error: "Acceso no autorizado. Se requiere token de autenticación.",
    });
  }

  try {
    // Verifica y decodifica el token
    const decoded = jwt.verify(token, "tu_secreto"); // Reemplaza 'tu_secreto' con tu clave secreta

    // Busca al usuario en la base de datos utilizando el ID del token decodificado
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    // Agrega el usuario autenticado al objeto de solicitud para su uso en otras rutas
    req.user = user;

    // Continúa con la siguiente función de middleware o controlador
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token no válido." });
  }
};

module.exports = authMiddleware;
