import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-dependency-compiler";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  dependencyCompiler: {
    paths: ["anon-aadhaar-contracts/contracts/Verifier.sol"],
  },
};

export default config;
