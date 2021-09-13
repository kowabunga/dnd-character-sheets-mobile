import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDb from './config/db.js';

dotenv.config({ path: 'server/config/config.env' });

connectDb();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`.yellow));
