# NextJS NFT Marketplace with TheGraph

This project is part of the Hardhat FreeCodeCamp video. Thanks [@PatrickAlphaC](https://github.com/PatrickAlphaC) and [FreeCodeCamp]() for making this material avialable for Free!!!

Checkout the full blockchain course video [here](https://www.youtube.com/watch?v=gyMwXuJrbJQ). Plus the full repo [here](https://github.com/smartcontractkit/full-blockchain-solidity-course-js).


## 1. Git clone the contracts repo

In it's own terminal / command line, run: 

```
git clone https://github.com/PatrickAlphaC/hardhat-nft-marketplace-fcc
cd hardhat-nextjs-nft-marketplace-fcc
yarn
```

## 2. Deploy to goerli 

After installing dependencies, deploy your contracts to goerli:

```
yarn hardhat deploy --network goerli
```

## 3. Deploy your subgraph

```
cd ..
git clone https://github.com/PatrickAlphaC/graph-nft-marketplace-fcc
cd graph-nft-marketplace-fcc
yarn
```

Follow the instructions of the [README](https://github.com/PatrickAlphaC/graph-nft-marketplace-fcc/blob/main/README.md) of that repo. 

Then, make a `.env` file and place your temporary query URL into it as `NEXT_PUBLIC_SUBGRAPH_URL`.


## 4. Start your UI

Make sure that:
- In your `networkMapping.json` you have an entry for `NftMarketplace` on the goerli network. 
- You have a `NEXT_PUBLIC_SUBGRAPH_URL` in your `.env` file. 

```
yarn dev
```

# Thank you!

[![JP Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jpcampaya/)
[![JP Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/0xJayPi)