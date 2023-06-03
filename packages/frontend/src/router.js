import React, { useEffect } from 'react'
import { Routes, Route, HashRouter, useNavigate } from 'react-router-dom'
import AppBar from './components/AppBar'
import MainContainer from './components/MainContainer'

import { ManageNFT, CreateNFT, MintingPage, Settings, About, NotFound, MetamaskInstall } from './pages'
// console.log(process.env.PUBLIC_URL);
//basename={process.env.PUBLIC_URL}
import MyRoutes from './routes'
export default function Router() {

  

    return (
        <HashRouter >
            <AppBar />
            <MainContainer>
                

                    <MyRoutes />
               
            </MainContainer>
        </HashRouter>
    )
}

// function Home() {
//     return (
//         <div>
//             hello home
//         </div>
//     )
// }