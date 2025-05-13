const express = require('express');
const { createUser, getAllUsers, updateUser, deleteUser } = require('../controller/userController');

const router = express.Router();

// Define the routes and map them to the controller functions
router.post('/', createUser);
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
