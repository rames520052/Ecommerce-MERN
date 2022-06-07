const express = require('express');
const router = express.Router();
const {users} = require('../data');
const {authorize} = require('../middlewares/auth')
const welcomeUser = require('../controllers/login')


router.post('/', authorize, welcomeUser )

module.exports = router