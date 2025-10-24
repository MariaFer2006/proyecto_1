import express from 'express';
import { body } from 'express-validator';
import { subscribeNewsletter, getAllSubscribers } from '../controllers/newsletterController.js';

const router = express.Router();

const newsletterValidation = [
    body('email').isEmail().withMessage('Email inválido'),
];

router.post('/', newsletterValidation, subscribeNewsletter);
router.get('/', getAllSubscribers);

export default router;