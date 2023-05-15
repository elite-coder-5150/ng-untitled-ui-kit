const express = require('express');
const router = express.Router();

import { 
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUerById, 
} from '../controllers/';

router.post('/users', createUser);

// get all users
router.get('/users', getAllUsers);

// get a specific user by id
router.get('/users/:id', getUserById);

// update user by id
router.get('/users/:id', updateUserById);

// delete user by id
router.delete('/users/:id', deleteUserById);

module.exports = router;