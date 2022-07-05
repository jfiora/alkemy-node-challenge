import { Router } from "express";
import { getMovies, getMovie, createMovie, updateMovie, deleteMovie } from "../controllers/moviesController.js";
import { getCharacters, getCharacter, createCharacter, updateCharacter, deleteCharacter } from "../controllers/charactersController.js";
import { getGenres, createGenre } from "../controllers/genresController.js";

const router = Router();

router.get('/characters', getCharacters);
router.post('/characters', createCharacter);
router.put('/characters/:id', updateCharacter);
router.get('/characters/:id', getCharacter);
router.delete('/characters/:id', deleteCharacter);

router.get('/movies', getMovies);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie);
router.get('/movies/:id', getMovie);
router.delete('/movies/:id', deleteMovie);

router.get('/genres', getGenres);
router.post('/genres', createGenre);

export default router;