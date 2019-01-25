const Group = require('../models/Group')

const groupController = {
    index: (req, res) => {
        Group.find({}).then((groups) => {
            res.send(groups)
        })
    }
}

module.exports = groupController