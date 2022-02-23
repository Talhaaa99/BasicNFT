//Importing ethers from hardhat 
const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
const { ethers } = require("hardhat");

async function main() {
// contract factory is an abstraction used to deploy new smart contracts in ethers.js
// so nft contract is a factory for game item
    const nftContract = await ethers.getContractFactory("GameItem");
    const deployedNFTContract = await nftContract.deploy();
//print address of deployed contract 
    console.log("NFTContractAddress:", deployedNFTContract.address)
}

// call main function and check for errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });