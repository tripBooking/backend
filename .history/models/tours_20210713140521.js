const mongoose = require('mongoose');
const User = require('./userModel')
const scheme = new User()

const ToursSchema = new mongoose.Schema({
    title: String,
    start: Date,
    end: Date,
    capacity: Number,
    going: {type:Number,default:0},
    open:Boolean,
    attending: mongoose.Types.DocumentArray,
    location: String,
    stops: [String],
    active:Boolean,


})
ToursSchema.methods.AddGoing = (e) => {
    if (this.going < this.capacity) {
        this.going += 1
    }
}

const Tours = mongoose.model("Tours", ToursSchema)

module.exports = Tours