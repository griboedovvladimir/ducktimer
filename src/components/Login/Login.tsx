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
import { NavLink } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../CONSTANTS';
import { API_CONSTANTS } from '../../CONSTANTS';
import { restService } from '../../shared/services/rest.service';

class Login extends Component <{}> {
    public signIn = {
        email: '',
        password: '',
        remember: false,
    };

    public onChangeSignIn = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        switch ( event.target.id ) {
            case 'email':
                this.signIn.email = event.target.value;
                break;
            case  'password':
                this.signIn.password = event.target.value;
                break;
            case 'remember':
                this.signIn.remember = event.target.checked;
                break;
        }
    };

    public onSubmit = ( event: React.FormEvent<HTMLFormElement> ): void => {
        event.preventDefault();
        console.log( this.signIn );
        restService.post(API_CONSTANTS.LOGIN, {}).then(console.log)
    };

    public render(): React.ReactNode {
        return (
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
                                <Input onChange={this.onChangeSignIn} disableUnderline={true} id="email"
                                       name="email" autoComplete="email" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input onChange={this.onChangeSignIn} disableUnderline={true} name="password"
                                       type="password" id="password"
                                       autoComplete="current-password"/>
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox onChange={this.onChangeSignIn} value="remember" id="remember"
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
        )
    }
}


export default Login;

