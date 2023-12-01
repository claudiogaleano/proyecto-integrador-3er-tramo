import React, { useState, useEffect } from "react";
import api from "../../services/api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Lógica para obtener la lista de posts desde la API
    const fetchPosts = async () => {
      try {
        const response = await api.getPosts(); // Asume que existe una función getPosts en tu servicio api
        setPosts(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de posts:", error);
      }
    };

    fetchPosts();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
