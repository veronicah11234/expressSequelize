import express from 'express';

import { createAttraction } from '../controllers/attractionControllers.js';

const router = express.Router();

router.get('/attraction', (req, res) => {

});

router.get('/attraction/:id', (req, res) => {

});

router.post('/attraction', createAttraction);

router.patch('/attractions/:id', (req, res) => {

});

router.delete('/attractions/:id', (req, res) => {

});

export default router;