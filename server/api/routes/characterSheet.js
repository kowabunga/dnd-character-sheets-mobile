import express from 'express';
import { checkJwt } from '../../middleware/jwt.js';
import {
  createCharacterSheet,
  deleteCharacterSheet,
  getCharacterSheet,
  updateCharacterSheet,
  devDeleteCharacterSheet,
  getAllCharacterSheets,
} from '../controllers/characterSheet.js';

const router = express.Router();

router
  .route('/')
  .get(checkJwt, getAllCharacterSheets)
  .post(checkJwt, createCharacterSheet);
router
  .route('/:id')
  .get(checkJwt, getCharacterSheet)
  .put(checkJwt, updateCharacterSheet)
  .delete(checkJwt, deleteCharacterSheet);
router.route('/dev/:userToDelete').delete(devDeleteCharacterSheet);

export default router;
