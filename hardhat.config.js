require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

// console.log("API_URL:", API_URL);
// console.log("PRIVATE_KEY length:", PRIVATE_KEY?.length);


module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "volta",
  networks: {
    hardhat: {},
    volta: {
      url: API_URL,
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
      gas: 21000000, // you had too many zeros (gas limit should be like 21 million)
      gasPrice: 80000000000, // 80 gwei is enough, optional
    },
  },
};
