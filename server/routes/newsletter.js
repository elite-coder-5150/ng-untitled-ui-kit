const express = require('express');
const router = express.Router();

import {
    createNewsletter,
    getAllNewsletters,
    getNewsletterById,
    updateNewsletterById,
    deleteNewsletterById,
} from '../controllers/';

// create a new newsletter
router.post('/newsletters', createNewsletter);

// get all newsletters
router.get('/newletters', getAllNewsletters);

// get a specific newsletter by id
router.get('/newsletter/:id', getNewsletterById);

router.put('/newsletters/:id', updateNewsletterById);

router.delete('/newsletters/:id', deleteNewsletterById);
