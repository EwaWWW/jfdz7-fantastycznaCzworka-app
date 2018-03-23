import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'


import MenuBar from './Common/MainMenu';
import AddWish from './Views/WishesView/AddWish'



class App extends Component {
  render() {
    return (


      <React.Fragment>
          <Grid container>
              <Grid.Column>
            <MenuBar/>
              </Grid.Column>
          </Grid>
            <AddWish />

      </React.Fragment>
    )
  }
}

export default App;
