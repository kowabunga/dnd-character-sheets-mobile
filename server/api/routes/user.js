import express from 'express';
import {
  createUser,
  deleteUser,
  fetchUser,
  updateUser,
  fetchAllCharacterSheets,
  fetchCharacterSheetbyId,
  devDeleteTestUser,
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

router.route('/dev').delete(devDeleteTestUser);

export default router;
