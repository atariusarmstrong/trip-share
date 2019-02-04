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
    image: "https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/46444602_10156652123006427_5737935054571569152_n.jpg?_nc_cat=101&_nc_ht=scontent.fatl1-2.fna&oh=7a78815d9eeab5f90e9d0841e65677fa&oe=5CBC76C0",
    location: "Atlanta, GA",
    dreamTrip: "Barcelona",
    passport: true,
    trips: [barcelona, toronto],
    groups: [familyreunion]
})
const travelbot = new User({
    username: "TravelBot123",
    image: "https://cdn-images-1.medium.com/max/1200/1*8mpWApzQD5gZZlnYYUkbcA.png",
    location: "Apple",
    dreamTrip: "Google HQ",
    passport: true
})




User.deleteMany({})
    .then(() => Trip.deleteMany({}))
    .then(() => Group.deleteMany({}))
    .then(() => Trip.insertMany([barcelona, toronto]))
    .then(() => User.insertMany([atarius]))
    .then(() => barcelona.save())
    .then(() => toronto.save())
    .then(() => atarius.save())
    .then(() => travelbot.save())
    .then(() => familyreunion.save())
    .then(() => console.log('DB Seeded'))
    .then(() => mongoose.connection.close())