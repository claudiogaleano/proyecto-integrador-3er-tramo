const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentControllers");
const authMiddleware = require("../middleware/authmiddleware");

// Rutas relacionadas con los comentarios
router.post(
  "/comments",
  authMiddleware.authenticateUser,
  commentController.createComment
);

module.exports = router;
