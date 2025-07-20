import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'SocialPost', required: true },
});

export const Favorite = mongoose.model('Favorite', favoriteSchema);