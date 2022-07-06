import { Character } from "../models/charactersModel.js";
import { Movie } from "../models/moviesModel.js";

export const getCharacters = async (req, res) => {
    try {
        const { name, age, movies } = req.query;

        if (name) {
            const charactersByName = await Character.findAll({
                where: {
                    name: name,
                },
                attributes: ['image', 'name'],
            });
            if (!charactersByName) {
                return res.status(404).json({ error: 'no characters found' });
            } else {
                return res.json(charactersByName);
            }
        }

        if (age) {
            const charactersByAge = await Character.findAll({
                where: {
                    age: age,
                },
                attributes: ['image', 'name'],
            });
            if (!charactersByAge) {
                return res.status(404).json({ error: 'no characters found' });
            } else {
                return res.json(charactersByAge);
            }
        }

        if (movies) {
            const charactersByMovie = await Character.findAll({
                attributes: ['image', 'name'],
                include: {
                    model: Movie,
                    through: { 
                        attributes: [],
                    },
                    where: { 
                        id: movies,
                    },
                    attributes: ['title'],
                },
            });
            if (!charactersByMovie) {
                return res.status(404).json({ error: 'no characters found' });
            }
            return res.status(200).json(charactersByMovie);
        }

        const characters = await Character.findAll({
            attributes: ['image', 'name'],
        });
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await Character.findOne({
            where: {
                id,
            },
            attributes: ['image', 'name', 'age', 'weight', 'history'],
            include: [
                { model: Movie, attributes: ['title'] },
            ],
        });
        res.json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createCharacter = async (req, res) => {
    try {
        const { image, name, age, weight, history, movie } = req.body;

        const movieExists = await Movie.findOne({
            where: {
                title: movie,
            }
        });
        if (!movie) return res.status(404).json({ message: 'movie not found' });

        const characterExists = await Character.findOne({
            where: {
                name: name,
            }
        });
        if (characterExists) {
            if (movieExists) { characterExists.addMovie(movieExists)};
            return res.status(201).json(characterExists);
        }

        const newCharacter = await Character.create({
            image,
            name,
            age,
            weight,
            history
        });
        if (movieExists) { newCharacter.addMovie(movieExists)};
        res.json(newCharacter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, name, age, weight, history, movie } = req.body;
        const character = await Character.findByPk(id);
        character.image = image || character.image;
        character.name = name || character.name;
        character.age = age || character.age;
        character.weight = weight || character.weight;
        character.history = history || character.history;
        await character.save();

        const movieExists = await Movie.findOne({
            where: {
                title: movie,
            }
        });
        if (movieExists) { character.addMovie(movieExists) };

        res.json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        await Character.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}