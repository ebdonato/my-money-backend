const router = require("express").Router()

const BillingCycle = require("../api/billingCycle/billingCycleService")

module.exports = (server) => {
    server.use("/api", router)

    BillingCycle.register(router, "/billing-cycles")
}
