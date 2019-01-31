const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')
const userController = require('../controllers/userController')
const groupController = require('../controllers/groupController')
const tripController = require('../controllers/tripController')

router.get('/', appController.index)
router.post('/signup', userController.create)

router.get('/users', userController.index)
router.get('/users/:userId', userController.show)
router.post('/users/:userId/addgroup', groupController.create)
router.get('/users/:userId/groups/:groupId', groupController.show)
router.patch('/users/:userId/groups/:groupId', groupController.update)
router.delete('/users/:userId/groups/:groupId', groupController.delete)

router.post('/users/:userId/addtrip', tripController.create)

router.get('/groups', groupController.index)




router.get('/trips', tripController.index)

router.get('/trips/:tripId', tripController.show)
router.patch('/trips/:tripId', tripController.update)
router.delete('/trips/:tripId', tripController.delete)

module.exports = router