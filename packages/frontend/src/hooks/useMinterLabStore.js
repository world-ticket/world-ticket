import { create } from 'zustand'

export const useMinterLabStore = create((set) => ({
    // selectedCollection: getCollections().find((collection) => collection.id === localStorage.getItem('selectedCollectionId')) ?? null,
    // selectedCollection: null,
    // setSelectedCollection: (selectedCollection) => set({ selectedCollection }),
    // selectedCollectionId: +localStorage.getItem('selectedCollectionId') ?? null,
    // setSelectedCollectionId: (selectedCollectionId) => set({ selectedCollectionId }),
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
    contract1155Address:null,
    setContract1155Address: (contract1155Address) => set({ contract1155Address }),
    isContractCreatedWithAccount: false,
    setIsContractCreatedWithAccount: (isContractCreatedWithAccount) => set({ isContractCreatedWithAccount }),
    // mainnetWeb3: null,
    // setmainnetWeb3: (mainnetWeb3) => set({ mainnetWeb3 }),
    // testnetWeb3: null,
    // settestnetWeb3: (testnetWeb3) => set({ testnetWeb3 }),
    // network: null,
    // setNetwork: (network) => set({ network }),
    // chain: null,
    // setChain: (chain) => set({ chain }),
    // category: null,
    // setCategory: (category) => set({ category }),
    // mainnetGachaContract: null,
    // setMainnetGachaContract: (mainnetGachaContract) => set({ mainnetGachaContract }),
    // testnetGachaContract: null,
    // setTestnetGachaContract: (testnetGachaContract) => set({ testnetGachaContract }),
    // mainnetGachaAddress: null,
    // setMainnetGachaAddress: (mainnetGachaAddress) => set({ mainnetGachaAddress }),
    // testnetGachaAddress: null,
    // setTestnetGachaAddress: (testnetGachaAddress) => set({ testnetGachaAddress }),
}))