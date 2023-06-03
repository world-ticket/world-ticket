import { ethers } from 'hardhat'


async function main() {
    
    if(!process.env.WORLD_APP_ID || !process.env.WORLD_APP_ACTION_ID || !process.env.WORLD_ID_ADDRESS) {
        throw new Error("Missing env variables")
    }

    const ContractFactory = await ethers.getContractFactory('WorldTicket')
    const contract = await ContractFactory.deploy(process.env.WORLD_ID_ADDRESS, process.env.WORLD_APP_ID, process.env.WORLD_APP_ACTION_ID)

    await contract.deployed()

    console.log('Contract deployed to:', contract.address)
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})