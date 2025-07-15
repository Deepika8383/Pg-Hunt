// routes/PGRoutes.js
import express from 'express';
import { fetchPGsByCity } from '../Controller/PGController.js';

const router = express.Router();

router.get('/:city', fetchPGsByCity);

export default router;
