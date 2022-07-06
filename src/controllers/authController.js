import { User } from "../models/usersModel.js";
import { authConfig } from "../config/authConfig.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email | !password) { return res.send(404).json({message: 'email or password is missing'}) };

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) { return res.send(404).json({ message: `user ${email} not found` }) };

        if (!bcrypt.compareSync(password, user.password)) { return res.send(401).json({ message: 'unauthorized' }) };

        let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires,
        });

        res.json({
            user: user,
            token: token
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email | !password) { return res.send(404).json({message: 'email or password is missing'}) };

        let encryptedPassword = bcrypt.hashSync(password, authConfig.rounds);

        const newUser = await User.create({
            email,
            password: encryptedPassword
        });

        let token = jwt.sign({ user: newUser }, authConfig.secret, {
            expiresIn: authConfig.expires,
        });

        res.json({
            user: newUser,
            token: token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}