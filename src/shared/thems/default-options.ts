import red from '@material-ui/core/colors/purple';

//Theme-options for React MUI
export const options ={
    palette: {
        primary: { main: red[900] }, // Purple and green play nicely together.
        secondary: { main: '#cb0800' }, // This is just green.A700 as hex.
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        useNextVariants: true,
            fontFamily: [
            'ProximaNova-Regular'
        ].join(','),
    },
};