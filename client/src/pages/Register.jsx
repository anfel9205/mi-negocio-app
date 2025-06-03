// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AuthStyles.css"; // ✅ mismo estilo
import axios from "axios";


function Register() {
      // Estados para capturar valores del formulario
  const [username, setUsername] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");

  // Hook para redirigir tras registrar
  const navigate = useNavigate();

  const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      username,
      email,
      password,
    });

    console.log(res.data.message); // Confirmación en consola
    navigate("/"); // Redirige al login
  } catch (err) {
    setError(err.response?.data?.message || "Error al registrar");
  }
};


  return (
    <div className="login-container">
      {/* Título central */}
      <h1 className="app-title">OneBiz</h1>
      <h2 className="sub-Auth">Registra Tu Negocio</h2>
      {/* Mostramos error si existe */}
      {error && <p className="error">{error}</p>}

      <form className="login-form" onSubmit={handleRegister}>
        {/* Campo: Nombre de usuario */}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}                      // enlaza al estado
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* Campo: Correo electrónico */}
                <input
          type="email"
          placeholder="Correo electrónico"
          value={email}                         // enlaza al estado
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Campo: Contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}                      // enlaza al estado
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Botón para enviar el registro */}
        <button type="submit" className="submit">
          Crear cuenta
        </button>

        {/* Link para volver al login */}
        <p>
        ¿Ya tienes cuenta? <Link className="link-Auth" to="/">Inicia sesión</Link>
        </p>
    </form>
    </div>
 );
}

export default Register;
