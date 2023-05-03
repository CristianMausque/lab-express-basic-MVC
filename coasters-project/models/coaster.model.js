const mongoose = require('mongoose')

const coasterSchema = new mongoose.Schema({
    // fill here all the coaster properties. All right!
    title: String,
    description: String,
    length: Number,
    inversions: Number,
    imageUrl: String
})

const Coaster = mongoose.model('coaster', coasterSchema)

module.exports = Coaster