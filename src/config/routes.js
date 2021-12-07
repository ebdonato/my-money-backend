const express = require("express")

const auth = require("./auth")

const BillingCycle = require("../api/billingCycle/billingCycleService")

const AuthService = require("../api/user/userService")

module.exports = function (server) {
    /*
     * Rotas protegidas por Token JWT
     */

    const protectedApi = express.Router()

    server.use("/api", protectedApi)

    protectedApi.use(auth)

    BillingCycle.register(protectedApi, "/billing-cycles")

    /*
     * Rotas abertas
     */

    const openApi = express.Router()

    server.use("/open-api", openApi)

    openApi.post("/login", AuthService.login)

    openApi.post("/signup", AuthService.signup)

    openApi.post("/validate-token", AuthService.validateToken)
}
