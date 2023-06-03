import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks:{
      mumbai: {
          url: process.env.RPC_URL,
          accounts: [process.env.PRIVATE_KEY],
      },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
  };

export default config;
