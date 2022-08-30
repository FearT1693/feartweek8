require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: " https://goerli.optimism.io/",
       accounts: ["17ef79f309c12d4d8caf3fe9f723ddb417f892b66e3dd4d2a68afb9f5e37dbc1"]
    }
  }

};
