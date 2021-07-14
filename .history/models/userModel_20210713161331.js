const mongoose = require('mongoose');
const ToursSchema = new mongoose.Schema({
    title: String,
    start: Date,
    end: Date,
    capacity: Number,
    open:Boolean,
    location: String,
    stops: [String],
    active:Boolean,


})
const UserSchema = new mongoose.Schema({
    email: String,
    phone: String,
    customerId: String,
    Tours:[ToursSchema]


})

const Users = mongoose.model("Users", UserSchema)

module.exports = Users