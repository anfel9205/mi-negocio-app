// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de autenticación
app.use('/api/auth', authRoutes);

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/onebiz', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Conectado a MongoDB');
  app.listen(PORT, () => console.log(`🚀 Servidor escuchando en puerto ${PORT}`));
})
.catch((err) => console.error('❌ Error al conectar a MongoDB:', err));
