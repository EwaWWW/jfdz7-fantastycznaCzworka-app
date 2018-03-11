import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'


import MenuBar from './Common/MainMenu';




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
    )
  }
}

export default App;
