import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Registration from '../Registration';
import { ROUTE_CONSTANTS } from '../../CONSTANTS';
import Main from '../Main/Main';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <section>
                    <Switch>
                        <Route path={ROUTE_CONSTANTS.LOGIN_PAGE} component={Login}/>
                        <Route path={ROUTE_CONSTANTS.REGISTRATION_PAGE} component={Registration}/>
                        <Route path={ROUTE_CONSTANTS.MAIN_PAGE} component={Main}/>
                        <Route path={ROUTE_CONSTANTS.ROOT} component={Login}/>
                    </Switch>
                </section>
            </BrowserRouter>
        );
    }
}

export default App;
