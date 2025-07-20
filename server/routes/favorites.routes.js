import express from 'express';
import {
  addFavorite,
  getFavorites
} from '../controllers/favorites.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', protect ,addFavorite);
router.get('/:userId', protect ,getFavorites);

export default router;
