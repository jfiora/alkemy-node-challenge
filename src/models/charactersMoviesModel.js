import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";

export const CharacterMovie = sequelize.define('CharactersMovies', {
    movieId: {
        type: DataTypes.INTEGER,
    },
    characterId: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
});