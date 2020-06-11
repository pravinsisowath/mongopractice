const { Schema, model } = require('mongoose')

module.exports = model('Movie', new Schema({
    title: String,
    director: String,
    length: String
}))