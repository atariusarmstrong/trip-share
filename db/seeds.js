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

User.remove({})
    .then(() => atarius.save())
    .then(() => console.log('DB Seeded'))
    .then(() => mongoose.connection.close())