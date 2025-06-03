import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthStyles.css"; // ✅ antes era login.css
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    // Guardar token y datos de usuario en localStorage
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // Redirigir al dashboard
    navigate("/dashboard");
  } catch (err) {
    setError(err.response?.data?.message || "Error al iniciar sesión");
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
