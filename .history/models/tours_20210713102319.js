const mongoose = require('mongoose');

const ToursSchema = new mongoose.Schema({
    title: String,
    start: Date,
    end: Date,
    capacity: Number,
    going: Number,
    open:Boolean,
    attending: [mongoose.Types.ObjectId],
    location: String,
    stops:[String]


})
ToursSchema.methods.AddGoing = (e) => {
    if (this.going < this.capacity) {
        this.going += 1
    }
}

const Tours = mongoose.model("Tours", ToursSchema)

module.exports = Tours