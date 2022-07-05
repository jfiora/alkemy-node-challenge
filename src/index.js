import app from './app.js';
import * as dotenv from 'dotenv'
import {sequelize} from './database/database.js';

async function main() {
    try {
        await sequelize.authenticate();
        console.log('db connected successfully');

        dotenv.config();
        const PORT = process.env.PORT;

        app.listen(PORT);
        console.log('server is running on port: ', PORT);
    } catch (error) {
        console.error('server could not initializate: ', error);
    }
}

main();