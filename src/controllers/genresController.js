import { Genre } from "../models/genresModel.js";

export const getGenres = async (req, res) => {
    try {
        const genres = await Genre.findAll();
        res.json(genres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createGenre = async (req, res) => {
    try {
        const { name, image } = req.body;
        const newGenres = await Genre.create({
            name, 
            image
        });
        res.json(newGenres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}