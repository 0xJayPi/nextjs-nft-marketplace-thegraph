import { useEffect, useState } from "react"
import { useWeb3Contract } from "react-moralis"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import nftAbi from "../constants/BasicNft.json"

export default function NFTBox({ price, nftAddress, tokenId, marketplaceAddress, seller }) {
    const [imageUri, setImageURI] = useState("")

    const { runContractFunction: getTokenURI } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "tokenURI",
        params: {
            tokenId: tokenId,
        },
    })

    async function updateURI() {
        const tokenURI = await getTokenURI()
        console.log(`The TokenUri is ${tokenURI}`)
        if (tokenURI) {
            const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            const tokenURIResponse = await (await fletch(requestURL)).json()
            const imageURI = tokenURIResponse.image
            const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            setImageURI(imageURIURL)
        }
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateURI()
        }
    }, [isWeb3Enabled])

    return (
        <div>
            <div></div>
        </div>
    )
}
