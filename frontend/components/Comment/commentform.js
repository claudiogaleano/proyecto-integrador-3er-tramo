import React, { useState } from "react";
import api from "../../services/api";

const CommentForm = ({ postId }) => {
  const [text, setText] = useState("");

  const handleCreateComment = async () => {
    const commentData = { text, postId };
    try {
      const response = await api.createComment(commentData);
      console.log("Comentario creado:", response.data);
    } catch (error) {
      console.error("Error al crear el comentario:", error);
    }
  };

  return (
    <div>
      <h3>Agregar comentario</h3>
      <textarea
        placeholder="Escribe tu comentario..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleCreateComment}>Agregar comentario</button>
    </div>
  );
};

export default CommentForm;
