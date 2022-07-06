import { Movie } from "../models/moviesModel.js";

export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll({
            attributes: ['image', 'title', 'createdDate']
        });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findOne({
            where: {
                id,
            },
        });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createMovie = async (req, res) => {
    try {
        const { image, title, createdDate, calification } = req.body;
        const newMovie = await Movie.create({
            image,
            title,
            createdDate,
            calification,
        });
        res.json(newMovie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, title, createdDate, calification } = req.body;
        const movie = await Movie.findByPk(id);
        movie.image = image;
        movie.title = title;
        movie.createdDate = createdDate;
        movie.calification = calification;
        await movie.save();

        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        await Movie.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}