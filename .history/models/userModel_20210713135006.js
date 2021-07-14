const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: String,
    phone: String,
    customerId:String
})

const Users = mongoose.model("Users", UserSchema)

module.exports = Users