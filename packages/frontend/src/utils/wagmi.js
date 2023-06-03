import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { goerli, mainnet, polygon, polygonMumbai, polygonZkEvm, polygonZkEvmTestnet, xdc, xdcTestnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

// const { chains, provider, webSocketProvider } = configureChains(
//   [mainnet, ...(import.meta.env.MODE === 'development' ? [goerli] : [])],
//   [
//     publicProvider(),
//   ],
// )
const MODE = 'development'

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    goerli,
    polygon,
    polygonMumbai,
    polygonZkEvm,
    polygonZkEvmTestnet,
    xdc,
    xdcTestnet,
    ...(MODE === 'development' ? [goerli, polygonMumbai] : [])],
  [
    publicProvider(),
  ],
)

// klay custom 쓸 수 있는가?
// cosmos , eth
// 조사해보기
// link vault 조사 

// 아 이름 뺏기는거
// ENS

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains, provider }
