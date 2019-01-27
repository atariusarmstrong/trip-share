const Trip = require('../models/Trip')

const tripController = {
    index: (req, res) => {
        Trip.find({}).then((trips) => {
            res.send(trips)
        })
    }
}

module.exports = tripController