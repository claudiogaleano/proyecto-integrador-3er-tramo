const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middleware/authmiddleware");

// Rutas relacionadas con las publicaciones
router.get("/posts", postController.getAllPosts);
router.get("/posts/:postId", postController.getPostById);
router.post(
  "/posts",
  authMiddleware.authenticateUser,
  postController.createPost
);

module.exports = router;
