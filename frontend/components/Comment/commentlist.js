import React, { useState, useEffect } from "react";
import api from "../../services/api";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Lógica para obtener la lista de comentarios para un post específico desde la API
    const fetchComments = async () => {
      try {
        const response = await api.getCommentsForPost(postId); // Asume que existe una función getCommentsForPost en tu servicio api
        setComments(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de comentarios:", error);
      }
    };

    fetchComments();
  }, [postId]); // Se ejecuta cuando cambia el postId

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
