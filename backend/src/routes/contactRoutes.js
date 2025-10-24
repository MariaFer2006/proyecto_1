import express from 'express';
import { body } from 'express-validator';
import { createContact, getAllContacts, getContactById } from '../controllers/contactController.js';

const router = express.Router();

const contactValidation = [
    body('nombre').trim().notEmpty().withMessage('El nombre es requerido'),
    body('apellido').trim().notEmpty().withMessage('El apellido es requerido'),
    body('email').isEmail().withMessage('Email inválido'),
    body('telefono').trim().notEmpty().withMessage('El teléfono es requerido'),
];

router.post('/', contactValidation, createContact);
router.get('/', getAllContacts);
router.get('/:id', getContactById);

export default router;

