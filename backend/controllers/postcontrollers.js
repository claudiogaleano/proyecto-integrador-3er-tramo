const Post = require("../models/post");

const postController = {
  getAllPosts: async (req, res) => {
    // Lógica para obtener todas las publicaciones
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPostById: async (req, res) => {
    // Lógica para obtener una publicación por su ID
    try {
      const post = await Post.findById(req.params.postId);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ error: "Publicación no encontrada" });
    }
  },

  createPost: async (req, res) => {
    // Lógica para crear una nueva publicación
    try {
      const newPost = await Post.create({ ...req.body, user: req.user._id });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = postController;
