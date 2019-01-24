require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')

const atarius = new User({
    username: "atariusarmstrong",
    location: "Atlanta, GA",
    dreamTrip: "Barcelona",
    passport: true,
    trips: []
})
const testuser = new User({
    username: "testuser",
    location: "somewhere",
    dreamTrip: "anywhere"
})

User.remove({})
    .then(() => atarius.save())
    .then(() => testuser.save())
    .then(() => console.log('DB Seeded'))
    .then(() => mongoose.connection.close())