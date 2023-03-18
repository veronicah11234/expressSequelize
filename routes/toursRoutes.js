import express from 'express';

import { createTours } from '../controllers/toursControllers.js';

const router = express.Router();

router.get('/tours', (req, res) => {

});

router.get('/tours/:id', (req, res) => {

});

router.post('/tours', createTours);

router.patch('/tours/:id', (req, res) => {

});

router.delete('/tours/:id', (req, res) => {

});

export default router;