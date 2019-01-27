const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({}).then((users) => {
            res.send(users)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId).then((users) => {
            res.send(users)
        })
    }
}

module.exports = userController