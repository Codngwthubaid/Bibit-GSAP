import express from 'express';
import { getSocialPosts, seedSocialPosts } from '../controllers/social.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/seed", protect, seedSocialPosts);
router.get('/all', protect, getSocialPosts);

export default router;
