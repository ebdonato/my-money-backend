module.exports = {
    apps: [
        {
            name: "my-money-backend",
            script: "./src/loader.js",
            instances: "max",
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
}
