const CONTRACT_ADDRESS = "0xDcB8916b87Af8487F479e49caD95710684E53D19"
const META_DATA_URL = "ipfs://bafyreibpnjck74hgiknnzeoqfkmy3f4ruqqgducy2osuid3inpgi5arlra/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });