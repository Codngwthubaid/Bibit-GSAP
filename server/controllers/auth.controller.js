import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
};

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: 'User already exists' });

        const user = await User.create({ name, email, password });
        const token = generateToken(user);

        res.status(201).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(404).json({ message: 'User not found' });

        const isMatch = await user.comparePassword(password);
        if (!isMatch)
            return res.status(401).json({ message: 'Invalid credentials' });

        const token = generateToken(user);

        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
};
