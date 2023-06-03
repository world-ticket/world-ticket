import Dexie from 'dexie';


export const db = new Dexie('NFTContracts');

db.version(1).stores({
    nftContracts: "++id,chainId,contract721Address,ownerAddress,collectionName,collectionSymbol"
})


export function addNFTContract({chainId, contract721Address, ownerAddress, collectionName, collectionSymbol}) {
    return db.nftContracts.add({
        collectionName: collectionName,
        collectionSymbol: collectionSymbol,
        chainId: chainId,
        contract721Address: contract721Address,
        ownerAddress: ownerAddress,
        contract1155Address:null

    })
}

export function update1155Address(id, address) {
    return db.nftContracts.update(id, { contract1155Address: address })
}

// export function exportCollections() {
//     console.log(db.nftContracts.toArray());
//     return db.nftContracts.toArray()
// }

export function getCollections() {
    // console.log(db.nftContracts.toArray());
    return db.nftContracts.toArray()
}

export function importCollections(collections) {
    console.log(collections);
    return db.nftContracts.bulkAdd(collections).then((lastKey) => {
        return lastKey;
    }).catch((error) => {
        console.error("Some collections did not succeed. However, " +
            collections.length - error.failures.length + " collections was added successfully");
    });
}



export function getCollectionById(id) {
    if (id === 0) {
        return new Promise((resolve, reject) => {
            // resolve({chainId:0});
            resolve(fakeCollection);
        })
    }
    return db.nftContracts.get(id);
}

export function ownNFTContract(address) {
    // if(address === undefined) return true;
    return db.nftContracts.get({ contract721Address: address })
}


// id = 0 is the fake collection for newbie noobies
// may make fake collection data
const fakeCollection = {
    // collectionName: "Newbie Noobies",
    collectionName: "Please Create and Select a Collection",
    chainId: 0,
}



