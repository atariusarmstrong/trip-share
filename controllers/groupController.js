const Group = require('../models/Group')

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
        Group.create(req.body)
            .then((group) => {
                res.send(group)
            })
    },
    update: (req, res) => {
        Group.findByIdAndUpdate(req.params.groupId, req.body)
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