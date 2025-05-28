import express from "express";
import bcrypt from "bcryptjs";      // Para hashear contraseñas
import User from "../models/User.js";

const router = express.Router();

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 1) Verificar que no exista otro usuario con ese email
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Correo ya registrado" });
    }

    // 2) Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // 3) Crear y guardar el usuario
    const newUser = new User({ username, email, password: hash });
    await newUser.save();

    // 4) Responder con éxito (podemos devolver datos mínimos)
    res.status(201).json({ message: "Usuario creado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

export default router;
