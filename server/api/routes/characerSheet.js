import express from 'express';
import { checkJwt } from '../../middleware/jwt.js';
import { createCharacterSheet } from '../controllers/characterSheet.js';

const router = express.Router();

// @route Get api/charactersheet
// @desc Get all character sheet names/ids
// @access private

router.route('/').post(checkJwt, createCharacterSheet);

export default router;
