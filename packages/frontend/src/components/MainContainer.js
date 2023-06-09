import React from 'react'
import { Box } from '@mui/material'

import { Container } from '@mui/system'

// interface Props {
//     children: React.ReactElement
// }

export default function Home({ children }) {
    // const isLoading = useMinterLabStore(state => state.isLoading)


    // if (isLoading) {
    //     return <Loading />
    // }

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, marginTop: 8, width: { sm: `calc(100% - ${240}px)` } }}

            style={{

                background: "linear-gradient(#9A01FF,#DB02C6)",
                height: "100vh",
            }}
        >
            <Container maxWidth="lg">

                {children}
            </Container>
        </Box>

    )
}