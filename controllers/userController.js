const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({}).then((users) => {
            res.send(users)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('trips').populate('groups').then((users) => {
            res.send(users)
        })
    },
    create: (req, res) => {
        User.create(req.body)
        .then((user) => {
            res.send(user)
        })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
        .then(() => {
            res.send(200)
        })
    }
}

module.exports = userController