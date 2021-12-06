const port = process.env.PORT || 3003

const bodyParser = require("body-parser")

const cors = require("cors")

const queryParser = require("express-query-int")

const server = require("express")()

server.use(bodyParser.urlencoded({extended: true}))

server.use(bodyParser.json())

server.use(cors())

server.use(queryParser())

server.listen(port, () => {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server
