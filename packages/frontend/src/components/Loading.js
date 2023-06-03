import { Box, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


export default function Loading(props) {

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh'}}
        >

            <Container sx={{  justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                <CircularProgress size={300} />
            </Container>
        </Box>
    );
}