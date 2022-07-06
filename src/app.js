import express from 'express';
import routes from './routes/routes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(express.json());
app.use(authRoutes);
app.use(routes);

export default app;