import { Character } from "../models/charactersModel.js";
import { Movie } from "../models/moviesModel.js";
import { Genre } from "../models/genresModel.js";

export async function databaseConfig(db) {
    try {
        await db.authenticate();
        Character.belongsToMany(Movie, {
            as: 'characters',
            through: 'CharactersMovies',
        });
        Movie.belongsToMany(Character, {
            as: 'characters',
            through: 'CharactersMovies',
        });
        Movie.belongsTo(Genre, { 
            foreignKey: 'genres' 
        });

        db.sync();

        console.log('db connected successfully');
    } catch (err) {
        console.error('database could not initializate: ', err);
    }
}