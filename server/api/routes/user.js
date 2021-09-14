import express from 'express';
import {
  createUser,
  deleteUser,
  fetchUser,
  updateUser,
} from '../controllers/user.js';
import { checkJwt } from '../../middleware/jwt.js';

const router = express.Router();

router
  .route('/')
  .get(checkJwt, fetchUser)
  .post(createUser)
  .put(checkJwt, updateUser)
  .delete(checkJwt, deleteUser);

export default router;
