import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";

async function main() {
  const Verifier = await ethers.getContractFactory("Verifier");
  const verifier = await Verifier.deploy();
  await verifier.deployed();

  const _verifierAddress = verifier.address;
  console.log(_verifierAddress);

  // Setup you appId in the smart contract
  // const _appId = `${process.env.NEXT_PUBLIC_APP_ID}`;
  // console.log(_appId);
  const appId = BigInt("317627209104769491736779965566729912327616856064").toString();
  console.log("App Id", appId);

  const AnonAadhaarVerifier = await ethers.getContractFactory("AnonAadhaarVerifier")
  const anonAadhaarVerifier = await AnonAadhaarVerifier.deploy(_verifierAddress, appId);
  // const anonAadhaarVerifier = await ethers.deployContract(
  //   "AnonAadhaarVerifier",
  //   [_verifierAddress, appId]
  // );
  await anonAadhaarVerifier.deployed();

  const _anonAadhaarVerifierAddress = anonAadhaarVerifier.address;

  // const vote = await ethers.deployContract("Vote", [
  //   "Do you like this app?",
  //   ["0", "1", "2", "3", "4", "5"],
  //   _anonAadhaarVerifierAddress,
  // ]);

  // await vote.waitForDeployment();

  console.log(`AnonAadhar contract deployed to ${_anonAadhaarVerifierAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
//   const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

//   const lockedAmount = ethers.utils.parseEther("1");

//   const Lock = await ethers.getContractFactory("Lock");
//   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   await lock.deployed();

//   console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
// }
