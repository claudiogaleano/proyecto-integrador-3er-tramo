import { useState } from "react";
import TravelImage from "./assets/travel-image.png";
import "./App.css";
import RegisterForm from "../components/auth/Registerform";
import LoginForm from "../components/auth/Loginform";

function App() {
  const [count, setCount] = useState(0);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false);
  };

  return (
    <>
      <div>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            height={300}
            src={TravelImage}
            className="logo"
            alt="Viajes logo"
          />
        </a>
      </div>
      <h1>Viaja con-Migo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Like {count}
        </button>
        <p>
          <a href="#" onClick={toggleRegisterForm}>
            Regístrate{" "}
          </a>
          e{" "}
          <a href="#" onClick={toggleLoginForm}>
            Inicia sesión
          </a>{" "}
          y Descubre un Mundo a tu Alcance.
        </p>
        {showRegisterForm && <RegisterForm />} {showLoginForm && <LoginForm />}
      </div>
      <p className="read-the-docs">Tu viaje a un solo click de distancia!</p>
    </>
  );
}

export default App;
