import React, { Component } from 'react';
import Menu from './Menu';
import SearchView from "./SearchView/SearchView";
import MenuBar from './Menu';
import { Grid } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <React.Fragment>
          <SearchView/>
            <Grid container>
            <Grid.Column>
            <MenuBar/>
            </Grid.Column>
            </Grid>
      </React.Fragment>
    )
  }
}

export default App;
