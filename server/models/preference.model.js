import mongoose from 'mongoose';

const preferenceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  categories: [String],
  darkMode: { type: Boolean, default: false }
});

export const Preference = mongoose.model('Preference', preferenceSchema);
