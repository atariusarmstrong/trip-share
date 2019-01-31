const Group = require('../models/Group')
const User = require('../models/User')


const groupController = {
    index: (req, res) => {
        Group.find({}).then((groups) => {
            res.send(groups)
        })
    },
    show: (req, res) => {
        Group.findById(req.params.groupId).then((groups) => {
            res.send(groups)
        })
    },
    create: (req, res) => {
        User.findById(req.params.userId).then((user) => {
            Group.create(req.body)
                .then((group) => {
                    user.groups.push(group)
                    user.save()
                    res.send(group)
                })
        })
    },
    update: (req, res) => {
        Group.findByIdAndUpdate(req.params.groupId, req.body, {new: true})
        .then((updateGroup) => {
            updateGroup.save()
            res.send(updateGroup)
        })
    },
    delete: (req, res) => {
        Group.findByIdAndDelete(req.params.groupId)
        .then(() => {
            res.send(200)
        })
    }
}

module.exports = groupController