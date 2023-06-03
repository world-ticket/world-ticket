import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // mode: 'light',
        primary: {
            main: "#FFC0CB"
        },
        success: {
            main: "#CCFF06"
        },
        // secondary: {
        //     main: "#474d57"
        // },
        // background: {
        //     paper: "#0b0e11",
        //     default: "#181a20"
        // },

    },
});

export default darkTheme;

export const primaryColor = "#fcd535"
export const secondaryColor = "#474d57"
// 메인
//#fcd535

//배경
//#181a20

// 페이퍼
//#0b0e11