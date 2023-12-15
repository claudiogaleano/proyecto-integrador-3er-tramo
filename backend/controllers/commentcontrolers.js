const Comment = require("../models/comment");

const commentControllers = {
  createComment: async (req, res) => {
    // Lógica para crear un nuevo comentario
    try {
      const newComment = await Comment.create({
        ...req.body,
        user: req.user._id,
      });
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = commentControllers;
