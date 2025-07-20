import mongoose from "mongoose";

const socialPostSchema = new mongoose.Schema({
    platform: String,
    username: String,
    content: String,
    hashtag: String,
    image: String,
});

export const SocialPost = mongoose.model("SocialPost", socialPostSchema);
