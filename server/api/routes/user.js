import express from 'express';
import { createUser, fetchUser, updateUser } from '../controllers/user.js';
import { checkJwt } from '../../middleware/jwt.js';

const router = express.Router();

router
  .route('/')
  .get(checkJwt, fetchUser)
  .post(createUser)
  .put(checkJwt, updateUser);

export default router;
