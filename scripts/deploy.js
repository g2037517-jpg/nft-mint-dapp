// Minimal Hardhat-style deploy script for local testing
async function main() {
const [deployer] = await ethers.getSigners();
const SimpleNFT = await ethers.getContractFactory('SimpleNFT');
const nft = await SimpleNFT.deploy();
await nft.deployed();
console.log('DEployed', nft.address);
}


main().catch(e => { console.error(e); process.exit(1); });
