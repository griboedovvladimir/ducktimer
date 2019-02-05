import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.scss'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/purple';
import { NavLink } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../CONSTANTS';

const theme = createMuiTheme( {
    palette: {
        primary: {main: red[ 900 ]}, // Purple and green play nicely together.
        secondary: {main: '#cb0800'}, // This is just green.A700 as hex.
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        useNextVariants: true,
        fontFamily: [
            'ProximaNova-Regular'
        ].join( ',' ),
    },
} );

class Login extends Component <{}> {
    public signIn = {
        email: '',
        password: '',
        remember: false,
    };

    public onChangeEmailField = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        this.signIn.email = event.target.value;
    };

    public onChangePasswordField = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        this.signIn.password = event.target.value;
    };

    public onChangeCheckbox = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        this.signIn.remember = event.target.checked;
    };

    public onSubmit = ( event: React.FormEvent<HTMLFormElement> ): void => {
        event.preventDefault();
        console.log( this.signIn );
    };

    public render(): React.ReactNode {
        return (
            <MuiThemeProvider theme={theme}>
                <main className='main'>
                    <CssBaseline/>
                    <Paper className='paper'>

                        <img src="./img/logo.svg"/>

                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form onSubmit={this.onSubmit} className='form' color="secondary">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input onChange={this.onChangeEmailField} disableUnderline={true} id="email"
                                       name="email" autoComplete="email" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input onChange={this.onChangePasswordField} disableUnderline={true} name="password"
                                       type="password" id="password"
                                       autoComplete="current-password"/>
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox onChange={this.onChangeCheckbox} value="remember"
                                                   color="secondary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className='submit'
                            >
                                Sign in
                            </Button>
                            <Typography component="p" variant="subtitle2">
                                If you are unable to authorize, you may need to <NavLink
                                to={ROUTE_CONSTANTS.REGISTRATION_PAGE}>register</NavLink>
                            </Typography>
                        </form>
                    </Paper>
                </main>
            </MuiThemeProvider>
        )
    }
}


export default Login;

