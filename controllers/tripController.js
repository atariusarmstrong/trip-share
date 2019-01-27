const Trip = require('../models/Trip')
const User = require('../models/User')

const tripController = {
    index: (req, res) => {
        Trip.find({}).then((trips) => {
            res.send(trips)
        })
    },
    create: (req, res) => {
        User.findById(req.params.userId)
        .then((user) => {
            Trip.create(req.body)
            .then((newTrip) => {
                user.trips.push(newTrip)
                user.save()
                res.send(newTrip)
            })
        })
    },
    show: (req, res) => {
        Trip.findById(req.params.tripId)
        .then((trip) => {
            res.send(trip)
        })
    },
    delete: (req, res) => {
        Trip.findByIdAndDelete(req.params.tripId)
        .then(()=> {
            res.send(200)
        })
    }
}

module.exports = tripController