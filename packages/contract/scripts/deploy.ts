import { ethers } from 'hardhat'


async function main() {
    const worldIDAddress = "";
    const APP_ID = ""
    const ACTION_ID = ""
    
    if(!APP_ID || !ACTION_ID || !worldIDAddress) {
        throw new Error("Missing env variables")
    }

    const ContractFactory = await ethers.getContractFactory('WorldTicket')
    const contract = await ContractFactory.deploy(worldIDAddress, APP_ID, ACTION_ID)

    await contract.deployed()

    console.log('Contract deployed to:', contract.address)
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})