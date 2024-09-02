import { createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#FF6767', // Primary color (default MUI blue)
        },
        secondary: {
            main: '#dc004e', // Secondary color (default MUI pink)
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FF6767', // Custom background color for AppBar
                },
            },
        },
    },
});

export default theme;
