import express from 'express';
import { checkJwt } from '../../middleware/jwt.js';
import {
  createCharacterSheet,
  deleteCharacterSheet,
  getCharacterSheet,
  updateCharacterSheet,
} from '../controllers/characterSheet.js';

const router = express.Router();

router.route('/').post(checkJwt, createCharacterSheet);
router
  .route('/:id')
  .get(checkJwt, getCharacterSheet)
  .put(checkJwt, updateCharacterSheet)
  .delete(checkJwt, deleteCharacterSheet);

export default router;
