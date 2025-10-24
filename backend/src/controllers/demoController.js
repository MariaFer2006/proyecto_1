import pool from '../config/database.js';
import { validationResult } from 'express-validator';

export const createDemoRequest = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false, 
                errors: errors.array() 
            });
        }

        const { nombre, apellido, email, telefono, empresa, rol, necesidades } = req.body;

        const query = `
            INSERT INTO demo_requests (nombre, apellido, email, telefono, empresa, rol, necesidades)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
        `;

        const values = [nombre, apellido, email, telefono, empresa || null, rol || null, necesidades || null];
        const result = await pool.query(query, values);

        res.status(201).json({
            success: true,
            message: 'Solicitud de demo registrada exitosamente',
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error al crear solicitud de demo:', error);
        
        if (error.code === '23505') {
            return res.status(400).json({
                success: false,
                error: 'Este email ya ha solicitado una demo'
            });
        }

        res.status(500).json({
            success: false,
            error: 'Error al procesar la solicitud'
        });
    }
};

export const getAllDemoRequests = async (req, res) => {
    try {
        const query = 'SELECT * FROM demo_requests ORDER BY created_at DESC';
        const result = await pool.query(query);

        res.status(200).json({
            success: true,
            count: result.rows.length,
            data: result.rows
        });
    } catch (error) {
        console.error('Error al obtener solicitudes de demo:', error);
        res.status(500).json({
            success: false,
            error: 'Error al obtener solicitudes'
        });
    }
};
