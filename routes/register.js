const express = require('express');
const router = express.Router();
const {users} = require('../data')
const {validate} = require('../middlewares/auth')
const registerUsert = require('../controllers/register')

router.post('/', validate, registerUsert )


module.exports = router