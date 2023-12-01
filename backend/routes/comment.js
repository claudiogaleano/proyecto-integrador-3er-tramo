const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const authMiddleware = require("../middleware/authMiddleware");

// Rutas relacionadas con los comentarios
router.post(
  "/comments",
  authMiddleware.authenticateUser,
  commentController.createComment
);

module.exports = router;
