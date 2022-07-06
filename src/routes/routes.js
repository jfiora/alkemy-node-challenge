import { Router } from "express";
import { getMovies, getMovie, createMovie, updateMovie, deleteMovie } from "../controllers/moviesController.js";
import { getCharacters, getCharacter, createCharacter, updateCharacter, deleteCharacter } from "../controllers/charactersController.js";
import { getGenres, createGenre } from "../controllers/genresController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get('/characters', authMiddleware, getCharacters);
router.post('/characters', authMiddleware, createCharacter);
router.put('/characters/:id', authMiddleware, updateCharacter);
router.get('/characters/:id', authMiddleware, getCharacter);
router.delete('/characters/:id', authMiddleware, deleteCharacter);

router.get('/movies', authMiddleware, getMovies);
router.post('/movies', authMiddleware, createMovie);
router.put('/movies/:id', authMiddleware, updateMovie);
router.get('/movies/:id', authMiddleware, getMovie);
router.delete('/movies/:id', authMiddleware, deleteMovie);

router.get('/genres', authMiddleware, getGenres);
router.post('/genres', authMiddleware, createGenre);

export default router;