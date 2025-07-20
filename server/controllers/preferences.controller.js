import { Preference } from '../models/preference.model.js';

export const savePreferences = async (req, res) => {
  try {
    const { userId, categories, darkMode } = req.body;
    let pref = await Preference.findOneAndUpdate(
      { userId },
      { categories, darkMode },
      { new: true, upsert: true }
    );
    res.json(pref);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPreferences = async (req, res) => {
  try {
    const pref = await Preference.findOne({ userId: req.params.userId });
    res.json(pref);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
