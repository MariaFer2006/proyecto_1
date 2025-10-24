// 22. backend/src/routes/demoRoutes.js
import express from 'express';
import { body } from 'express-validator';
import { createDemoRequest, getAllDemoRequests } from '../controllers/demoController.js';

const router = express.Router();

const demoValidation = [
    body('nombre').trim().notEmpty().withMessage('El nombre es requerido'),
    body('apellido').trim().notEmpty().withMessage('El apellido es requerido'),
    body('email').isEmail().withMessage('Email inválido'),
    body('telefono').trim().notEmpty().withMessage('El teléfono es requerido'),
];

router.post('/', demoValidation, createDemoRequest);
router.get('/', getAllDemoRequests);

export default router;