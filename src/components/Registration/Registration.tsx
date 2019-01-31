import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import Button from '@material-ui/core/Button/Button';
import red from '@material-ui/core/colors/purple';
import './Registration.scss'

const theme = createMuiTheme({
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
});

class Registration extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <main className='main'>
                    <CssBaseline />
                    <Paper className='paper'>

                        <img src="./img/logo.svg"/>

                        <Typography component="h1" variant="h5">
                            Registration
                        </Typography>
                        <form className='form' color="secondary">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input disableUnderline={true} id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth >
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input  disableUnderline={true} name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className='submit'
                            >
                                Register
                            </Button>
                        </form>
                    </Paper>
                </main>
            </MuiThemeProvider>
        )
    }
}

export default Registration;
