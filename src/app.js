import express from 'express';
import * as dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js';
import moviesRoutes from './routes/moviesRouter.js';
import characterRoutes from './routes/charactersRoutes.js';
import genresRoutes from './routes/genresRoutes.js';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Alkemy node challenge',
            description: 'Disney characters and movies API',
            contact: {
                name: 'github.com/jfiora',
            },
            servers: [process.env.SERVER],
        }
    },
    apis: ['./routes/*.js']
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(moviesRoutes);
app.use(characterRoutes);
app.use(genresRoutes);
app.use(process.env.DOCS_ROUTE, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;