import express from 'express';
import {
  createUser,
  deleteUser,
  fetchUser,
  updateUser,
  fetchAllCharacterSheets,
  fetchCharacterSheetbyId,
} from '../controllers/user.js';
import { checkJwt } from '../../middleware/jwt.js';

const router = express.Router();

router
  .route('/')
  .get(checkJwt, fetchUser)
  .post(createUser)
  .put(checkJwt, updateUser)
  .delete(checkJwt, deleteUser);

router.route('/character').get(checkJwt, fetchAllCharacterSheets);

router.route('/character/:id').get(checkJwt, fetchCharacterSheetbyId);

export default router;
