import { Movie } from "../models/moviesModel.js";
import { Character } from "../models/charactersModel.js";
import { Genre } from "../models/genresModel.js";

export const getMovies = async (req, res) => {
    try {
        const { name, genre, order } = req.query;
        if (name) {
            const moviesByName = await Movie.findAll({
                where: {
                    title: name,
                },
                attributes: ['title', 'image', 'createdDate'],
            });
            if (!moviesByName) {
                return res.status(404).json({ error: 'no movies found' });
            } else {
                return res.json(moviesByName);
            }
        }

        if (genre) {
            const moviesByGenre = await Movie.findAll({
                where: {
                    genreId: genre,
                },
                attributes: ['title', 'image', 'createdDate'],
            });
            if (!moviesByGenre) {
                return res.status(404).json({ error: 'no movies found' });
            } else {
                return res.json(moviesByGenre);
            }
        }

        if (order) {
            if (order != 'ASC' && order != 'DESC') { order = ASC; }

            const moviesByName = await Movie.findAll({
                order: [['createdAt', order]],
                attributes: ['title', 'image', 'createdDate'],
            });
            if (!moviesByName) {
                return res.status(404).json({ error: 'no movies found' });
            } else {
                return res.json(moviesByName);
            }
        }

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
            attributes: ['image', 'title', 'createdDate', 'calification'],
            include: [
                { model: Character, attributes: ['name'] },
                { model: Genre, attributes: ['name'] },
            ],
        });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createMovie = async (req, res) => {
    try {
        const { image, title, createdDate, calification, genreId } = req.body;
        const newMovie = await Movie.create({
            image,
            title,
            createdDate,
            calification,
            genreId,
        });
        res.json(newMovie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, title, createdDate, calification, genreId } = req.body;
        const movie = await Movie.findByPk(id);
        movie.image = image || movie.image;
        movie.title = title || movie.title;
        movie.createdDate = createdDate || movie.createdDate;
        movie.calification = calification || movie.calification;
        movie.genreId = genreId || movie.genreId;
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