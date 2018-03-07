import React, { Component } from 'react';
import MenuBar from './Menu';
import { Grid } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container>
            <Grid.Column>

               <MenuBar/>
            </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
