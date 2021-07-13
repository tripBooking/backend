const mongoose = require('mongoose');
const child = new mongoose.Schema({})
const ScheduleSchema = mongoose.Schema({
    date: Date,
    events:[ child ],
    openings: [Date],
    holiday:{type:Boolean,default:false}
})

const Schedule = mongoose.model('Schedule', ScheduleSchema)

module.exports = Schedule