import React from 'react'
import { Box } from '@mui/material'
import { useMinterLabStore } from '../hooks/useMinterLabStore'
import Loading from './Loading'
import { Container } from '@mui/system'

// interface Props {
//     children: React.ReactElement
// }

export default function Home({ children }) {
    const isLoading = useMinterLabStore(state => state.isLoading)


    if (isLoading) {
        return <Loading />
    }

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, marginTop: 8, width: { sm: `calc(100% - ${240}px)` } }}
        >
            <Container maxWidth="lg">

                {children}
            </Container>
        </Box>

    )
}