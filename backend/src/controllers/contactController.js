import pool from '../config/database.js';
import { validationResult } from 'express-validator';

export const createContact = async (req, res) => {
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
            INSERT INTO contacts (nombre, apellido, email, telefono, empresa, rol, mensaje)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
        `;

        const values = [nombre, apellido, email, telefono, empresa || null, rol || null, necesidades || null];
        const result = await pool.query(query, values);

        res.status(201).json({
            success: true,
            message: 'Contacto registrado exitosamente',
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error al crear contacto:', error);
        res.status(500).json({
            success: false,
            error: 'Error al procesar la solicitud'
        });
    }
};

export const getAllContacts = async (req, res) => {
    try {
        const query = 'SELECT * FROM contacts ORDER BY created_at DESC';
        const result = await pool.query(query);

        res.status(200).json({
            success: true,
            count: result.rows.length,
            data: result.rows
        });
    } catch (error) {
        console.error('Error al obtener contactos:', error);
        res.status(500).json({
            success: false,
            error: 'Error al obtener contactos'
        });
    }
};

export const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const query = 'SELECT * FROM contacts WHERE id = $1';
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                error: 'Contacto no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error al obtener contacto:', error);
        res.status(500).json({
            success: false,
            error: 'Error al obtener contacto'
        });
    }
};