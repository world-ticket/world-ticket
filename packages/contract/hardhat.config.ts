import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";


// const dotenvConfigPath: string = process.env.DOTENV_CONFIG_PATH || "./.env";
dotenvConfig({ path: resolve(__dirname, './.env') });

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
