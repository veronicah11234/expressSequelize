import express from 'express';
import { validateRequest, signupSchema } from '../middleware/validateRequest.js';

import { signup } from '../controllers/authControllers.js';
import { login } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/login', login);

router.post('/signup', validateRequest(signupSchema), signup);

export default router;