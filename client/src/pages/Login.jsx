import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthStyles.css"; // ✅ antes era login.css
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/dashboard");
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      {/* Logo de la app */}
      <h1 className="app-title">OneBiz</h1>
      <h2 className="sub-Auth">Bienvenido</h2>

      {/* Formulario de login */}
      <form onSubmit={handleSubmit} className="login-form">
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Iniciar Sesión</button>
        <p>
          ¿No tienes cuenta? <Link className="link-Auth" to="/register">Crear cuenta</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
