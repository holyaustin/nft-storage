import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const { NFT_STORAGE_API_KEY } = process.env

async function storeAsset() {
   const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
   const metadata = await client.store({
       name: 'NFTStorage NFT',
       description: 'Trying out NFT.storage',
       image: new File(
           [await fs.promises.readFile('assets/ant9.png')],
           'NFTStorage NFT',
           { type: 'image/png' }
       ),
   })
   console.log("Metadata stored on Filecoin and IPFS using NFT.Storage with URL:", metadata.url)
}

storeAsset()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });