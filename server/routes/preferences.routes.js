import express from 'express';
import {
  savePreferences,
  getPreferences
} from '../controllers/preferences.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', protect, savePreferences);
router.get('/:userId', protect, getPreferences);

export default router;
