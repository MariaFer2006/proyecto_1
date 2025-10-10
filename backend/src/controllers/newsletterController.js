import pool from '../config/database.js';
import { validationResult } from 'express-validator';

export const subscribeNewsletter = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false, 
                errors: errors.array() 
            });
        }

        const { email } = req.body;

        const query = `
            INSERT INTO newsletter (email)
            VALUES ($1)
            RETURNING *
        `;

        const result = await pool.query(query, [email]);

        res.status(201).json({
            success: true,
            message: 'Suscripción exitosa al newsletter',
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error al suscribir al newsletter:', error);
        
        if (error.code === '23505') {
            return res.status(400).json({
                success: false,
                error: 'Este email ya está suscrito'
            });
        }

        res.status(500).json({
            success: false,
            error: 'Error al procesar la suscripción'
        });
    }
};

export const getAllSubscribers = async (req, res) => {
    try {
        const query = 'SELECT * FROM newsletter ORDER BY created_at DESC';
        const result = await pool.query(query);

        res.status(200).json({
            success: true,
            count: result.rows.length,
            data: result.rows
        });
    } catch (error) {
        console.error('Error al obtener suscriptores:', error);
        res.status(500).json({
            success: false,
            error: 'Error al obtener suscriptores'
        });
    }
};