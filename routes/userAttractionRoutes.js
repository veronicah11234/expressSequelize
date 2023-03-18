import express from 'express';

import { createUserAttraction } from '../controllers/userAttractionControllers.js';

const router = express.Router();

router.get('/user-attraction', (req, res) => {

});

router.get('/user-attraction/:id', (req, res) => {

});

router.post('/user-Attraction', createUserAttraction);

router.patch('/user-attraction/:id', (req, res) => {

});

router.delete('/user-attraction/:id', (req, res) => {

});

export default router;