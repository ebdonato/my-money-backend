require("dotenv").config()

const mongoose = require("mongoose")

mongoose.Promise = global.Promise

const mongoConnectString = process.env.MONGO_CONNECT_STRING || "mongodb://localhost:27017/my-money"

module.exports = mongoose.connect(mongoConnectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
