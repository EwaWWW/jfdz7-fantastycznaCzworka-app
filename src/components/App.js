import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'


import SearchView from "./Views/SearchView";
import MenuBar from './Common/MainMenu';
import UsersView from './Views/UsersView'

import WishesView from './Views/WishesView';


class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <React.Fragment>
          <Grid container>
              <Grid.Column>

            <MenuBar/>
        <Route exact path="/" component={SearchView}/>
        <Route path="/wishes" component={WishesView} />
        <Route path="/users" component={UsersView} />
              </Grid.Column>
          </Grid>


      </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
