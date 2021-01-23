
const HDWalletProvider = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
 const fs = require('fs');
 const mnemonic = fs.readFileSync("./secret").toString().trim();


module.exports = {

  networks: {

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
     ropsten: {
       provider: () => new HDWalletProvider(mnemonic,`https://ropsten.infura.io/v3/ac57552ac31e4afda277bcfa706c24f4`),
       network_id: 3,       // Ropsten's id
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },
    // Useful for private networks
    private: {
      host: "127.0.0.1",   
      network_id: "*",   
      port: 8545   
   // }
 }

  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
     timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.7.4",   // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}

