const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Trip = new Schema({
    destination: String,
    accomodation: String,
    flight: {
        airline: String,
        confirmationNo: String,
    },
    from: String,
    to: String
})

module.exports = mongoose.model('Trip', Trip)