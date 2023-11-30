import React, { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para enviar los datos del formulario al backend
    console.log("Registrando usuario:", { username, email, password });
  };

  return (
    <div>
      <h2>Regístrate</h2>
      <form>
        <label htmlFor="username">Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegister}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
