const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Group = new Schema({
    name: String,
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    trips: [{
        type: Schema.Types.ObjectId,
        ref: 'Trip'
    }]
})

module.exports = mongoose.model('Group', Group)

