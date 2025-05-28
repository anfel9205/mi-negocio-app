import mongoose from "mongoose";

// Definimos el esquema del usuario
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,          // No permite dos usuarios con mismo nombre
  },
  email: {
    type: String,
    required: true,
    unique: true,          // No permite dos emails iguales
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Crea campos createdAt y updatedAt

// Exportamos el modelo
export default mongoose.model("User", UserSchema);
