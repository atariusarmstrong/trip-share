require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Group = require('../models/Group')
const Trip = require('../models/Trip')


const barcelona = new Trip({
    destination: "Barcelona",
    accomodation: "AirBnB",
    transportation: "Delta"
})
const toronto = new Trip({
    destination: "Toronto, Canada",
    accomodation: "Swanky Hotel",
    transportation: "Soutwest"
})
const familyreunion = new Group({
    name: "Family Reunion",
    trips: [barcelona]    
})
const atarius = new User({
    username: "atariusarmstrong",
    location: "Atlanta, GA",
    dreamTrip: "Barcelona",
    passport: true,
    trips: [barcelona, toronto],
    groups: [familyreunion]
})
const testuser = new User({
    username: "testuser",
    location: "somewhere",
    dreamTrip: "anywhere"
})




User.deleteMany({})
    .then(() => Trip.deleteMany({}))
    .then(() => Group.deleteMany({}))
    .then(() => Trip.insertMany([barcelona, toronto]))
    .then(() => User.insertMany([atarius]))
    .then(() => barcelona.save())
    .then(() => toronto.save())
    .then(() => atarius.save())
    .then(() => testuser.save())
    .then(() => familyreunion.save())
    .then(() => console.log('DB Seeded'))
    .then(() => mongoose.connection.close())