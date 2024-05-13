
module.exports = {
    contracts_build_directory: "client/src/contracts",
    networks: {
        development: {
            network_id: "*",
            host: '127.0.0.1',
            port: 7545,
            gas: 6000000,
            gasPrice: 20000000000,
            skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )

        }
    },
    compilers: {
        solc: {
            version: "0.8.19", // higher than 0.8.20 can give error !??
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                },
            }
        }
    }
};