import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import preferencesRoutes from './routes/preferences.routes.js';
import favoritesRoutes from './routes/favorites.routes.js';
import socialRoutes from './routes/social.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/preferences', preferencesRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/social', socialRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port :  http://localhost:${PORT}`));
