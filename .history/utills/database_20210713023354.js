const mongose = require('mongose')
const passcode =process.env.DBURL
mongoose.connect(`mongodb+srv://hobsonD:<password>@cluster0.yzhog.mongodb.net/test`)
const db = mongose.connection

export default  db