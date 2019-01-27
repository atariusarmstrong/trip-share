const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')
const userController = require('../controllers/userController')
const groupController = require('../controllers/groupController')

router.get('/', appController.index)

router.get('/users', userController.index)
router.get('/users/:id', userController.show)

router.get('/groups', groupController.index)
router.post('/groups', groupController.create)
router.get('/groups/:groupId', groupController.show)
router.patch('/groups/:groupId', groupController.update)
router.delete('/groups/:groupId', groupController.delete)

module.exports = router