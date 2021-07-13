const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
    date: Date,
    events: { type: subSchema, default: {} },
    openings: [Date],
    holiday:{type:Boolean,default:false}

    
})

const Schedule = mongoose.model('Schedule', ScheduleSchema)

module.exports = Schedule