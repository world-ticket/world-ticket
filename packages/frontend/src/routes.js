import React, {  useLayoutEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'


import {  About, NotFound, Community,Ticket } from './pages'


export default function MyRoutes() {

    const navigate = useNavigate();

    // useLayoutEffect(() => {
    //     if (typeof window.ethereum === "undefined") {
    //         console.log("let's install metamask")
    //         navigate("/MetamaskInstall");
    //         // window.history.push("/install-metamask")
    //     }
    // }, [navigate]);

    return (
        <Routes base>
            {/* <Route exact path={`/CreateCollection`} element={<CreateCollection />} /> */}
            {/* <Route exact path={`/CreateNFT`} element={<CreateNFT />} />
            <Route exact path={`/ManageNFT`} element={<ManageNFT />} />
            <Route path={`/MintingPage/:chainId/:contract1155Address`} element={<MintingPage />} />
            <Route path={`/MintingPage`} element={<MintingPage />} />
            <Route  path={`/MetamaskInstall`} element={<MetamaskInstall />} />
            <Route exact path={`/Settings`} element={<Settings />} /> */}
            <Route exact path={`/Ticket`} element={<Ticket />} />
            <Route exact path={`/Community`} element={<Community />} />
            <Route exact path={`/`} element={<About />} />
            <Route path={`*`} element={<NotFound />} />
            {/* <Route path={`/`} element={<Home />} /> */}
        </Routes>
    )
}

// function Home() {
//     return (
//         <div>
//             hello home
//         </div>
//     )
// }