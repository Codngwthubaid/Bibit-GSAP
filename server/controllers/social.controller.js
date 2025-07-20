import { SocialPost } from "../models/socialPost.model.js";
import { posts } from "../constants/index.js";

export const seedSocialPosts = async (req, res) => {
    try {
        await SocialPost.deleteMany();
        await SocialPost.insertMany(posts);

        res.status(201).json({ message: "Social posts seeded successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to seed social posts", error });
    }
};


export const getSocialPosts = async (req, res) => {
    try {
        const posts = await SocialPost.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch social posts", error });
    }
};

