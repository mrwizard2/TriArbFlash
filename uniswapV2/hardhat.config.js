require("@nomicfoundation/hardhat-toolbox");
const customEnv = require('./config/custom-environment-variables.js');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.5.5" },
      { version: "0.6.6" },
      { version: "0.8.8" },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/oR2RI3ISaPeRDfEm4IB-f5ios943aPoy",
      },
    },
    testnet: {
      url: "https://eth-goerli.g.alchemy.com/v2/vlCfVvznhIMuoE2tpkg9AxxXOFFYiNQj",
      chainId: 5,
      accounts: [
        customEnv.privateKey,
      ],
    },
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/oR2RI3ISaPeRDfEm4IB-f5ios943aPoy",
      chainId: 1,
      accounts: [
        customEnv.hardhatKey,
      ],
    },
  },
};

