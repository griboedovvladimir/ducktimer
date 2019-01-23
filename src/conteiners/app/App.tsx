import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from '../loginPage';
import RegistrationPage from '../registrationPage';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <section>
                <Switch>
                    <Route path={'/login/'} component={LoginPage}/>
                    <Route path={'/registration/'} component={RegistrationPage}/>
                    <Route path="/" component={LoginPage}/>
                </Switch>
            </section>
        </BrowserRouter>
    );
  }
}

export default App;
