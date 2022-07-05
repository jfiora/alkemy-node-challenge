import { Character } from "../models/charactersModel.js";

export const getCharacters = async (req, res) => {
    try {
        const characters = await Character.findAll();
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
        });
        res.json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createCharacter = async (req, res) => {
    try {
        const { image, name, age, weight, history } = req.body;
        const newCharacter = await Character.create({
            image,
            name,
            age,
            weight,
            history
        });
        res.json(newCharacter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, name, age, weight, history } = req.body;
        const character = await Character.findByPk(id);
        character.image = image;
        character.name = name;
        character.age = age;
        character.weight = weight;
        character.history = history;
        await character.save();

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