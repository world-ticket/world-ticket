import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import SideNav from './SideNav';
import { useLocation } from 'react-router-dom';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import Logo from './worldticket_logo_.png'
const drawerWidth = 240;

// const StateMap = {
//   'CreateCollection': 0,
//   'CreateNFT': 1,
//   'ManageNFT': 2,
//   'MintingPage': 3,
//   'Settings': 4,
//   '': 5,
// }

const StateMap = {
 
  'Ticket': 0,
  'Community': 1,
  '': 2,
}


export default function ResponsiveDrawer() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const location = useLocation()
  // console.log(location)

  let result = location.pathname.split('/');
  // console.log(result);

  // 현재 어떤 탭에 있는지 알려주는 state
  const [value, setValue] = React.useState(StateMap[result[1]]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box >
      {/* <CssBaseline /> */}
      {/* <Box> */}

      <AppBar
        // position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
            Minter Lab
          </Typography> */}
          <img src={Logo} alt="logo" width="180" height="30" />
          <Box sx={{ flexGrow: 2 }} >

            {/* <CollectionSelect  /> */}
          </Box>
          <Box sx={{ flexGrow: 1 }} >

            
          </Box>
          {/* <ConnectButton /> */}
        </Toolbar>
      </AppBar>
      {/* </Box> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <SideNav value={value} handleChange={handleChange} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <SideNav value={value} handleChange={handleChange} />
        </Drawer>
      </Box>
    </Box>
  );
}



