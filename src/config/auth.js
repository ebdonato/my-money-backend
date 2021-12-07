const jwt = require("jsonwebtoken")

const authSecret = process.env.AUTH_SECRET || "abcdefghijklmnopqrstuvwxyz"

module.exports = (req, res, next) => {
    // CORS preflight request
    if (req.method === "OPTIONS") {
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers["authorization"]

        if (!token) {
            return res.status(403).send({errors: ["Nenhum token enviado"]})
        }

        jwt.verify(token, authSecret, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    errors: ["Falha na verificação do token."],
                })
            } else {
                req.decoded = decoded

                next()
            }
        })
    }
}
