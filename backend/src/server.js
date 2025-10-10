import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import demoRoutes from './routes/demoRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api', (req, res) => {
    res.json({ 
        message: 'API de Kawak funcionando correctamente',
        version: '1.0.0'
    });
});

app.use('/api/contact', contactRoutes);
app.use('/api/demo', demoRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ 
        error: err.message || 'Algo salió mal!',
        success: false
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Ruta no encontrada',
        success: false
    });
});

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});