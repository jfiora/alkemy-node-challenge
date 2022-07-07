import { Router } from "express";
import { getCharacters, getCharacter, createCharacter, updateCharacter, deleteCharacter } from "../controllers/charactersController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get('/characters', authMiddleware, getCharacters);
router.post('/characters', authMiddleware, createCharacter);
router.put('/characters/:id', authMiddleware, updateCharacter);
router.get('/characters/:id', authMiddleware, getCharacter);
router.delete('/characters/:id', authMiddleware, deleteCharacter);

export default router;