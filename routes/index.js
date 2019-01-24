const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')
const userController = require('../controllers/userController')

router.get('/', appController.index)

router.get('/users', userController.index)

module.exports = router