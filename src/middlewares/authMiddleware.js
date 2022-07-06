import jwt from "jsonwebtoken";
import { authConfig } from "../config/authConfig.js";

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ message: 'unauthorized' });
        }

        let token = authorization.split(" ")[1];
        jwt.verify(token, authConfig.secret, (error, decoded) => {
            if (error) {
                res.status(500).json({ message: 'invalid token' });
            }
            next();
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};