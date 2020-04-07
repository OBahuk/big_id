import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './assets/theme';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { LeftDrawer } from "./components/LeftDrawer";
import { Routes } from "./routes/Routes";
import store from './redux/store';
import { fetchCountries } from "./redux/actions";

function App() {
  store.dispatch(fetchCountries());

  return (
    <MuiThemeProvider theme = { theme }>
      <Provider store={store}>
        <HashRouter basename = '/'>
          <Container className="App">
              <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="stretch"
              >
                  <Grid container item xs={2} md={3} spacing={2}>
                      <LeftDrawer />
                  </Grid>
                  <Grid container item xs={10} md={9} spacing={2}>
                      <Routes />
                  </Grid>
              </Grid>
          </Container>
        </HashRouter>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
