// import { WorldIDWidget } from '@worldcoin/id'
import { IDKitWidget, solidityEncode, internal } from '@worldcoin/idkit'
import { ipfsUploadMetadata } from '../utils/ipfsUpload';
import { useState } from 'react';

import Stage from './stage.png'
import { Button, Divider, Grid, Paper, TextField } from '@mui/material';
import { useAccount, useSigner } from 'wagmi';

import EthSeoulABI from '../contracts/eth_seoul/metadata.json'
import { ethers } from 'ethers';

import { defaultAbiCoder as abi } from 'ethers/lib/utils'

import "./ticket.css"

const decode = (type, encodedString) => {
    return abi.decode([type], encodedString)[0]
}



console.log(EthSeoulABI)



// import { AuthProvider } from 'oidc-react';

// const oidcConfig = {
//     onSignIn: () => {
//         // Redirect?
//         console.log("onSignIn")
//     },
//     authority: 'https://id.worldcoin.org/authorize',
//     clientId: 'app_staging_aae9965dbbbefb6b7cfa1579bc0ed4bf',
//     clientSecret: 'sk_03f8ca8dc7ffc4db5bab6bc2b09a54f142f5b096c6265751',
//     redirectUri: '/ticket',
//     responseType:"id_token"
// };


export function Ticket() {

    const { data: signer, isError, isLoading } = useSigner();

    const account = useAccount()


    console.log("Ticket page loaded")
    const [seatSelection, setSeatSelection] = useState(0);
    const [price, setPrice] = useState(0);

    const [confirmSeat, setConfirmSeat] = useState("")
    // just multiply seatselection with 1000 as a price lol
    // insert number of seat selection as Textfield

    // const [value, setValue] = useState('');

    const [ticketTokenURI, setTokenURI] = useState('')

    const handleChange = (event) => {
        setSeatSelection(event.target.value);
    };

    async function uploadToIPFS() {
        const metadataForUpload = {
            name: "Blackpink Eth Seoul",
            description: "Blackpink concert ticket for Eth Seoul",
            image: "https://bafybeihciagprcgx3iotgws5ctawk2a5p53dlowruclnjpg2if2h6whpym.ipfs.nftstorage.link/wolrdticket_logo_icon_design.png",
            seatSelection: seatSelection,
            price: price,
            concertArtist: "BlackPink",
            concertStartsAt: 1677740800000
        }
        const tokenURI = await ipfsUploadMetadata(metadataForUpload);
        const tokenURL = `https://${tokenURI}.ipfs.nftstorage.link`;
        // console.log("NFT IPFS upload is completed, NFT is stored at : ", `https://ipfs.io/ipfs/${tokenURI}`);
        console.log("NFT IPFS upload is completed, NFT is stored at : ", tokenURL);


        setTokenURI(tokenURL)
        setPrice(Math.floor(33 * 1000 / seatSelection));

        setConfirmSeat(seatSelection)
    }

    async function onSuccess(response) {
        console.log('response', response)

        console.log("enter the concert")

        const worldTicketAddress = "0x1c3aDb05b8a51ec6D941cC266E72a62964D94bC2";

        const worldTicketContract = new ethers.Contract(worldTicketAddress, EthSeoulABI.abi, signer);

        const contractWithSigner = worldTicketContract.connect(signer)

        const unpackedProof = ethers.utils.defaultAbiCoder.decode(['uint256[8]'], response.proof)[0]
        const decodedMerkleRoot = decode("uint256", response.merkle_root)
        const decodedNullifierHash = decode("uint256", response.nullifier_hash)

        const gasEstimated = await worldTicketContract.estimateGas.mint(account.address, decodedMerkleRoot, decodedNullifierHash, unpackedProof, account.address)
        console.log("gasEstimated", gasEstimated)

        const tx = await contractWithSigner.mint(account.address, decodedMerkleRoot, decodedNullifierHash, unpackedProof, account.address, { gasLimit: "1000000" })
        const rc = await tx.wait()

        console.log(tx);
        console.log(rc);



    }

    return (


        <Grid container spacing={2}>
            <Grid item lg={8} xs={12}>
                <img width={600} height={600} src={Stage} alt="stage" />
            </Grid>
            <Grid item lg={4} xs={12}>

                <div
                    // elevation={3} 
                    style={{
                        padding: 20,
                        margin: 20,
                        // opacity: 0.3,
                        // backgroundColor: "#000000",
                    }}
                >

                    <h2>Seat Selection</h2>
                    <TextField
                        id="seatSelection"
                        label="Seat"
                        variant="outlined"
                        value={seatSelection}
                        onChange={handleChange}
                        color='success'
                        fullWidth
                    />
                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: 20
                            }}
                        >
                            <div></div>
                            <Button
                                variant="contained"
                                color='success'
                                onClick={uploadToIPFS}
                                sx={
                                    {
                                        fontWeight: 'bold',
                                    }
                                }
                            >
                                Enter
                            </Button>
                        </div>
                    </div>
                    <h2>Your Ticket Price</h2>
                    <Divider variant="middle" />

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            // marginTop: 20
                        }}
                    >
                        <h2>Sec {confirmSeat}</h2>
                        <h2>${price}</h2>
                    </div>

                    <Divider variant="middle" />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: 20
                        }}
                    >
                        <div></div>
                        <IDKitWidget
                            app_id="app_staging_fd34682d9ee03c5ce1511ae8d6c69330" // obtained from the Developer Portal
                            action="stag-ticket" // this is your action identifier from the Developer Portal (can also be created on the fly)
                            signal={solidityEncode(['address'], [account.address])} // any arbitrary value the user is committing to, e.g. for a voting app this could be the vote
                            onSuccess={onSuccess}
                            credential_types={['orb']} // the credentials you want to accept
                            // walletConnectProjectId="get_this_from_walletconnect_portal" // optional, obtain from WalletConnect Portal
                            enableTelemetry
                        >
                            {({ open }) => <Button
                                variant="contained"
                                color='success'
                                onClick={open}
                                sx={
                                    {
                                        fontWeight: 'bold',
                                    }
                                }
                            >
                                Buy Now!
                            </Button>}
                        </IDKitWidget>

                    </div>
                </div>
            </Grid>

        </Grid>






    )
}