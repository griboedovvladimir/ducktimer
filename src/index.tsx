import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { options } from './shared/thems/default-options';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme(options)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
