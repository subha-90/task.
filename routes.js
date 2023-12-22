const express = require('express');
const router = express.Router();
const {signupUser,signInUser, fetchUser, updateUser, deleteUser, fetchAllUsers} = require('./controller');


router.post('/signup',signupUser);

router.post('/signin',signInUser);

router.get('/user/:mobile', fetchUser);

router.put('/user/:mobile', updateUser);

router.delete('/user/:mobile', deleteUser);

router.get('/users', fetchAllUsers);

module.exports = router;