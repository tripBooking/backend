const mongoose = require('mongoose');
const ToursSchema = new mongoose.Schema({
    email: String,
    phone: String,
    customerId:String
})

const Users = mongoose.model("Users", ToursSchema)

module.exports = Users