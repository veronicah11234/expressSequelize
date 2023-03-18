import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import attractionRoutes from './routes/attractionRoutes.js';
import userAttractionRouter from './routes/userAttractionRoutes.js';


import toursRoutes from './routes/toursRoutes.js';

import reviewsRoutes from './routes/reviewsRoutes.js';

import bookingRoutes from './routes/bookingRoutes.js';

import authRoutes from './routes/authRoutes.js';

import errorHandler from './middleware/errorHandler.js';



import db from './models/index.js';

const sequelize = db.sequelize;

dotenv.config();
const app = express();

app.use(express.json());

app.use(errorHandler);

sequelize.sync({alter: true}).then(() => {
    console.log("Tables created.");
}).catch(err =>{
    console.log(err);
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', attractionRoutes);
app.use('/api/v1', userAttractionRouter);
app.use('/api/v1', authRoutes);
app.use('/api/v1', toursRoutes);
app.use('/api/v1', reviewsRoutes);
app.use('/api/v1', bookingRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});
