# NFT. Storage Sample 

## An NFT.Storage sample tutorial to show how to mint an NFT using NFT.storage and Openzepelin ERC 721 contract .

### npm install

Get an API key for NFT.storage from https://nft.storage/login/

### set up .env file with:
PRIVATE_KEY="Your Private Key"

NFT_STORAGE_API_KEY="Your Api Key"

### Store asset in your asset folder using:
node scripts/store-asset.mjs

### Deploy to polygon Mumbai using: 
npx hardhat run scripts/deploy-contract.mjs --network PolygonMumbai


### Mint asset to your address using :
npx hardhat run scripts/mint-nft.mjs \--network PolygonMumbai


Check your mumbai transaction on polyscan and your new asset lying in your wallet.
