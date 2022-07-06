import { Character } from "../models/charactersModel.js";
import { Movie } from "../models/moviesModel.js";
import { Genre } from "../models/genresModel.js";
import { CharacterMovie } from "../models/charactersMoviesModel.js";

export async function databaseConfig(db) {
    try {
        await db.authenticate();
        Character.belongsToMany(Movie, {
            through: CharacterMovie,
        });
        Movie.belongsToMany(Character, {
            through: CharacterMovie,
        });
        Genre.hasMany(Movie);
        Movie.belongsTo(Genre);

        db.sync();
        console.log('db connected successfully');
    } catch (err) {
        console.error('database could not initializate: ', err);
    }
}