import React, { useState } from "react";
import api from "../../services/api";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    const postData = { title, content };
    try {
      const response = await api.createPost(postData); // Asume que existe una función createPost en tu servicio api
      console.log("Post creado:", response.data);
      // Puedes realizar acciones adicionales después de crear el post, como actualizar la lista de posts
    } catch (error) {
      console.error("Error al crear el post:", error);
      // Puedes manejar el error mostrando un mensaje al usuario u otras acciones
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default PostForm;
