import app from './app.js';
import * as dotenv from 'dotenv'
import { sequelize } from './database/database.js';
import { databaseConfig } from './database/databaseConfig.js';

async function main() {
    dotenv.config();
    const PORT = process.env.PORT || 3000;
    try {
        await databaseConfig(sequelize);
        app.listen(PORT);

        console.log('server is running on port: ', PORT);
    } catch (error) {
        console.error('server could not initializate: ', error);
    }
}

main();