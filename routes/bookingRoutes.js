import express from 'express';

import { createBooking } from '../controllers/bookingControllers.js';

const router = express.Router();

router.get('/booking', (req, res) => {

});

router.get('/booking/:id', (req, res) => {

});

router.post('/booking', createBooking);

router.patch('/booking/:id', (req, res) => {

});

router.delete('/booking/:id', (req, res) => {

});

export default router;