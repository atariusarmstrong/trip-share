const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')
const userController = require('../controllers/userController')

router.get('/', appController.index)

router.get('/users', userController.index)
router.get('/users/:id', userController.show)

module.exports = router