const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    image: String,
    location: String,
    dreamTrip: String,
    passport: Boolean,
    trips: [{
        type: Schema.Types.ObjectId,
        ref: 'Trip'
    }],
    groups: [{
        type: Schema.Types.ObjectId,
        ref: "Group"
    }]
})

module.exports = mongoose.model('User', User)