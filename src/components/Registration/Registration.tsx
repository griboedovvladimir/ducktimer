import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import Button from '@material-ui/core/Button/Button';
import './Registration.scss'
import { restService } from '../../shared/services/rest.service';
import { API_CONSTANTS } from '../../CONSTANTS';
import { storageService } from '../../shared/services/storage.service';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/actons';
import { ILoginProps as IRegistrationProps } from '../Login/Login';
import { ILoginState as IRegistrationState } from '../Login/Login';


class Registration extends Component <IRegistrationProps, IRegistrationState> {
    public register = {
        name: '',
        email: '',
        password: ''
    };

    constructor( props: IRegistrationProps ) {
        super( props );
        this.state = {showMessage: false};
        if ( storageService.getTokenFromLocalStorage() || storageService.getTokenFromSessionStoragng() ) {
            this.props.history.push( '/main' );
        }
    }

    public onChangeRegister = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        switch ( event.target.id ) {
            case 'name':
                this.register.name = event.target.value;
                break;
            case 'email':
                this.register.email = event.target.value;
                break;
            case 'password':
                this.register.password = event.target.value;
                break;
        }
    };

    public onSubmit = ( event: React.FormEvent<HTMLFormElement> ): void => {
        event.preventDefault();
        restService.post( API_CONSTANTS.REGISTER, this.register ).then( response => {
            response.text().then( token => {
                if ( token ) {
                    this.props.authorize( {authorize: token} );
                    storageService.setTokenToSessionStorage( token );
                    this.props.history.push( '/main' );
                } else {
                    this.setState( {...this.state, showMessage: true} )
                }
            } );
        } )
    };

    public render(): React.ReactNode {
        return (
            <main className='main'>
                <CssBaseline/>
                <Paper className='paper'>

                    <img src="./img/logo.svg"/>

                    <Typography component="h1" variant="h5">
                        Registration
                    </Typography>
                    <form onSubmit={this.onSubmit} className='form' color="secondary">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input onChange={this.onChangeRegister} disableUnderline={true} name="name" type="text"
                                   id="name" autoComplete="name"/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input onChange={this.onChangeRegister} disableUnderline={true} id="email" name="email"
                                   autoComplete="email" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input onChange={this.onChangeRegister} disableUnderline={true} name="password"
                                   type="password" id="password"
                                   autoComplete="current-password"/>
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
                        {this.state.showMessage && <Typography component="p" variant="subtitle2" color="secondary">
                            A user with this email already exists
                        </Typography>}
                    </form>
                </Paper>
            </main>
        )
    }
}

const mapStateToProps = ( state: IRegistrationState ) => state;
export default connect( mapStateToProps, {...actions} )( withRouter( Registration ) );
