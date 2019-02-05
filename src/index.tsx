import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { options } from './shared/thems/default-options';


ReactDOM.render( <MuiThemeProvider
    theme={createMuiTheme( options )}>
    <App/>
</MuiThemeProvider>, document.getElementById( 'root' ) );

serviceWorker.unregister();
