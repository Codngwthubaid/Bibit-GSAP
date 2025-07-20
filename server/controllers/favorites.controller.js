import { Favorite } from '../models/favoriate.model.js';

export const addFavorite = async (req, res) => {
  try {
    const { userId, postId } = req.body;

    if (!userId || !postId) {
      return res.status(400).json({ message: 'userId and postId are required.' });
    }

    const favorite = new Favorite({
      userId,
      contentId: postId
    });

    await favorite.save();
    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.params.userId }).populate('contentId');
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
