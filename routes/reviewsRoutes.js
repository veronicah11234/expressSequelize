import express from 'express';

import { createReviews } from '../controllers/reviewsControllers.js';

const router = express.Router();

router.get('/reviews', (req, res) => {

});

router.get('/attraction/:id', (req, res) => {

});

router.post('/reviews', createReviews);

router.patch('/reviews/:id', (req, res) => {

});

router.delete('/reviews/:id', (req, res) => {

});

export default router;