import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';

import connectDb from './config/db.js';
import userRoutes from './api/routes/user.js';
import authRoutes from './api/routes/auth.js';
import characterRoutes from './api/routes/characterSheet.js';

dotenv.config({ path: 'server/config/config.env' });

connectDb();

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/character', characterRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`.yellow));

export default app;
