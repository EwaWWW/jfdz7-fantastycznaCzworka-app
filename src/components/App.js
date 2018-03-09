import React, { Component } from 'react';
import MenuBar from './Menu';
import { Grid } from 'semantic-ui-react'

import Menu from './Menu';
import SearchView from "./SearchView/SearchView";
import WishesView from "./WishesView";

class App extends Component {
  render() {
    return (
      <React.Fragment>

<Grid container>
<Grid.Column>
    <MenuBar/>
</Grid.Column>
</Grid>
          <SearchView/>
      </React.Fragment>
    );
  }
}

export default App;
