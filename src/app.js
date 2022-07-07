import express from 'express';
import routes from './routes/routes.js';
import authRoutes from './routes/authRoutes.js';
import moviesRoutes from './routes/moviesRouter.js';
import characterRoutes from './routes/charactersRoutes.js';
import genresRoutes from './routes/genresRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(moviesRoutes);
app.use(characterRoutes);
app.use(genresRoutes);
app.use(routes);

export default app;