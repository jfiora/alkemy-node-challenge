import { Router } from "express";
import { getGenres, createGenre } from "../controllers/genresController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get('/genres', authMiddleware, getGenres);
router.post('/genres', authMiddleware, createGenre);

export default router;