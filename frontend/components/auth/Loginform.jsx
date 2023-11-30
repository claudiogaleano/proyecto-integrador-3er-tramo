import React, { useState } from "react";
import api from "../../services/api";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const userData = { username, password };
    try {
      const response = await api.login(userData);
      console.log(response);
      // Puedes manejar la lógica de redirección o actualización del estado después del inicio de sesión exitoso aquí.
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      // Puedes manejar la lógica de mostrar un mensaje de error o realizar otras acciones en caso de error.
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
