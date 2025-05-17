// src/pages/Register.jsx

import { Link } from "react-router-dom";
import "../styles/AuthStyles.css"; // ✅ mismo estilo

function Register() {
  return (
    <div className="login-container">
      {/* Título central */}
      <h1 className="app-title">OneBiz</h1>
      <h2 className="sub-Auth">Registra Tu Negocio</h2>

      <div className="login-form">
        {/* Campo: Nombre de usuario */}
        <input type="text" placeholder="Nombre de usuario" />

        {/* Campo: Correo electrónico */}
        <input type="email" placeholder="Correo electrónico" />

        {/* Campo: Contraseña */}
        <input type="password" placeholder="Contraseña" />

        {/* Botón para enviar el registro */}
        <button className="submit">Crear cuenta</button>

        {/* Link para volver al login */}
        <p>
          ¿Ya tienes cuenta? <Link className="link-Auth" to="/">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
