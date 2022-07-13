import { Genre } from '../models/genresModel.js';
import { Movie } from '../models/moviesModel.js';
import { Character } from '../models/charactersModel.js';

export const mockData = async () => {
    await Genre.create({
        name: 'fiction',
        image: 'fiction.png'
    });
    await Genre.create({
        name: 'action',
        image: 'action.png'
    });
    await Genre.create({
        name: 'romance',
        image: 'romance.png'
    });
    await Movie.create({
        image: 'got.png',
        title: 'got',
        createdDate: 2013,
        calification: '5',
        genreId: '1',
    });
    await Movie.create({
        image: 'fast-and-furious.png',
        title: 'fast and furious',
        createdDate: 2009,
        calification: '3',
        genreId: '2',
    });
    await Movie.create({
        image: 'titanic.png',
        title: 'titanic',
        createdDate: 2000,
        calification: '5',
        genreId: '3',
    });
    const newCharacter1 = await Character.create({
        image: 'jon-snow.png',
        name: 'jon snow',
        age: 30,
        weight: 80,
        history: 'lord commander of the north'
    });
    newCharacter1.addMovie('got');
    const newCharacter2 = await Character.create({
        image: 'dominic-toretto.png',
        name: 'dominic toretto',
        age: 30,
        weight: 90,
        history: 'street racer'
    });
    newCharacter2.addMovie('fast and furious');
    const newCharacter3 = await Character.create({
        image: 'jack-dawson.png',
        name: 'jack dawson',
        age: 21,
        weight: 65,
        history: 'young artist'
    });
    newCharacter3.addMovie('titanic');
}