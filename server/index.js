// server/index.js

// 1. Importamos express
const express = require("express");

// 2. Creamos una instancia de Express
const app = express();

// 3. Middleware para leer JSON en las peticiones
app.use(express.json());

// 4. Ruta POST para registrar usuario
app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;
  console.log("Usuario registrado:", { username, email, password });

  // Aquí luego guardaremos en base de datos
  res.status(200).json({ message: "Usuario registrado con éxito" });
});

// 5. Iniciar servidor en puerto 5000
app.listen(5000, () => {
  console.log("Servidor backend corriendo en http://localhost:5000");
});
