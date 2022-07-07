import express from 'express';
import routes from './routes/routes.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(routes);

export default app;