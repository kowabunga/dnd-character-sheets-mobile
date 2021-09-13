import express from 'express';
import { login } from '../controllers/auth.js';

const router = express.Router();

router.route('/').post(login);

export default router;
