
import { Link, NavLink } from 'react-router-dom';
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Toolbar from '@mui/material/Toolbar';
import { Divider } from '@mui/material';

// interface SideNavProps {
//     value: number
//     handleChange: (_: React.SyntheticEvent, newValue: number) => void
// }

export default function SideNav({ value, handleChange }) {

    // const [value, setValue] = React.useState(0);

    // const handleChange = (_, newValue) => {
    //     setValue(newValue);
    // };

    // really stupid bug
    // https://github.com/mui/material-ui/issues/32749
    // useEffect(() => {
    //     // setTimeout(()=>{
    //     //     setValue(1)

    //     // },4000)
    //     setValue(value)
    // }, [value])


    return (
        <>
            <Toolbar />
            <Divider />
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
            >
                {/* <Tab label="Create Collection" to="/CreateCollection" component={NavLink} /> */}
                {/* <Tab label="Create NFT" to="/CreateNFT" component={NavLink} />
                <Tab label="Manage NFT" to="/ManageNFT" component={NavLink} />
                <Tab label="Minting Page" to="/MintingPage" component={NavLink} />
                <Tab label="Settings" to="/Settings" component={NavLink} /> */}
                <Tab label="Ticket" to="/Ticket" component={NavLink} />
                <Tab label="Community" to="/Community" component={NavLink} />
                <Tab label="About" to="/" component={NavLink} />
                {/* <Tab label="Item Five" to="/" component={Link} />
                <Tab label="Item Six" to="/" component={Link} />
                <Tab label="Item Seven" to="/" component={Link} /> */}
            </Tabs>
        </>

    );
}


// {/* <Tabs
//   orientation="vertical"
//   variant="scrollable"
//   value={value}
//   onChange={handleChange}
//   aria-label="Vertical tabs example"
//   sx={{ borderRight: 1, borderColor: "divider" }}
// >
//   <Tab label='Wallet' to='/' component={Link} />
//   <Tab label="Item One" />
//   <Tab label="Item Two" />
//   <Tab label="Item Three" />
//   <Tab label="Item Four" />
//   <Tab label="Item Five" />
//   <Tab label="Item Six" />
//   <Tab label="Item Seven" />
// </Tabs> */}