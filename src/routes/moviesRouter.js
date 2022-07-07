import { Router } from "express";
import { getMovies, getMovie, createMovie, updateMovie, deleteMovie } from "../controllers/moviesController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get('/movies', authMiddleware, getMovies);
router.post('/movies', authMiddleware, createMovie);
router.put('/movies/:id', authMiddleware, updateMovie);
router.get('/movies/:id', authMiddleware, getMovie);
router.delete('/movies/:id', authMiddleware, deleteMovie);

export default router;