
import React, { Suspense, lazy } from 'react'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './utils/theme';
import { Box } from '@mui/material';





//test ipad



function metamaskEventInit() {
  window.ethereum.on('chainChanged', (chainId) => {
    console.log("chainChanged")
    console.log(chainId)
    // metamaskEmitter.emit('chainChanged', chainId)
    window.location.reload();
  });

  window.ethereum.on('accountsChanged', (accounts) => {
    console.log("accountsChanged")
    console.log(accounts)
    // metamaskEmitter.emit('accountsChanged', accounts)
    // emit 이 일으키는건 , 어떤한 스테이트의 변화?
    // 결국 reload 를 하기에 의미가 없는건?
    window.location.reload();
  });

}




// minterlab 1155 버전
// 1155 매니저를 통해 , contract1155 불러오기
// 아예 new 컨트랙트 하지말고 , 박아버릴까? 주스탄드에 

// async function getContract1155Address() {
//   console.log(window.ethereum)
//   if (window.ethereum !== undefined) {
//     metamaskEventInit();


//     const provider = new ethers.providers.Web3Provider(window.ethereum)
//     console.log("provider : ", provider)
//     const signer = provider.getSigner()


//     try {
//       const { chain } = getNetwork()
//       console.log(chain)


//       const account = getAccount()
//       console.log(account);
//       console.log(signer);
//       // if (provider === undefined) {
//       //   console.log("provider is undefined")
//       // }

//       if (account.isConnected === false) {
//         // alert("Please connect wallet")
//         console.log("Please connect wallet")
//         return null
//       } else {

//         const manager1155 = new ethers.Contract(manager1155AddressByChainId[chain.id], manager1155ABI, signer);
//         const contractWithSigner = manager1155.connect(signer);


//         // return manager1155
//         return contractWithSigner.getMyContractAddress(0, 100)
//       }
//     } catch (error) {
//       console.log(error);
//       return null
//     }


//   } else {
//     // metamaskInstall 페이지로 이동 시키기
//     console.log("metamask is not installed")
//     // redirect("/metamaskInstall")
//     return null
//   }




// }



// // 추후에 init 이라고 해서 따로 빼기 ...
// const Router = lazy(() => getContract1155Address()
//   .then(address => {

//     console.log(address);

//     if (/^0x[a-fA-F0-9]{40}$/.test(address)) {
//       // 0x0000000000000000000000000000000000000000
//       // 이것도 valid address로 인식함

//       if (address === "0x0000000000000000000000000000000000000000") {
//         console.log("you have not created contract1155 yet")
//         useMinterLabStore.setState({
//           contract1155Address: address,
//         })

//         useMinterLabStore.setState({
//           isContractCreatedWithAccount: false
//         })
//       } else {

//         console.log("address is valid")
//         useMinterLabStore.setState({
//           contract1155Address: address,
//         })

//         useMinterLabStore.setState({
//           isContractCreatedWithAccount: true
//         })
//       }
//     }

//     return import('./router')
//   })

// )



const Router = lazy(() => import('./router'));



export default function App() {



  return (
    <ThemeProvider theme={darkTheme}>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Router />
        </Suspense>
      </Box>
    </ThemeProvider>
  )
}



// 🔴 dynamic import and fake "delay" Preview
// const Preview = lazy(async() => {
//   return new Promise((resolve, reject) => {
//      setTimeout(() => resolve(), 2000)
// })
//  .then(() => import("./components/Preview"))
//  .catch((e) => console.log(e))
// });






// import React, { useEffect } from 'react'




// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import * as Pages from "./pages";



// const labs = Object.entries(Pages);
// // console.log(labs);
// console.log(process.env.PUBLIC_URL);
// function App() {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <div style={{ height: "100vh" }} className="App">
//         <Routes>
//           {labs.map(([k, v]) => {
//             if (v.default) {
//               const Tmp = v.default;
//               return <Route exact key={k} path={`/${k}`} element={<Tmp />} />;
//             }
//             return null;
//           })}
//           <Route exact path={`/`} element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// function Home() {
//   return (
//     <React.Fragment>
//       <h1 style={{ marginTop: 0 }}>LAB</h1>
//       {labs.map(([k, v]) => {
//         if (v.default) {
//           return (
//             <div key={k}>
//               <Link to={`/${k}`}>{k}</Link>
//             </div>
//           );
//         }
//         return null;
//       })}
//     </React.Fragment>
//   );
// }


