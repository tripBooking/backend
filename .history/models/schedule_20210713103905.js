const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
    date: Date,
    events:[ mongoose.Types.Subdocument ],
    openings: [Date],
    holiday:{type:Boolean,default:false}
})

const Schedule = mongoose.model('Schedule', ScheduleSchema)

module.exports = Schedule