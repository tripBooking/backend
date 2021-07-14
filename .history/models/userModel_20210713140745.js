const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    _id: mongoose.Types._ObjectId,
    email: String,
    phone: String,
    customerId:String
})

const Users = mongoose.model("Users", UserSchema)

module.exports = Users