import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import MenuBar from './Common/MainMenu/Menu';
import AddWish from './Views/WishesView/AddWish'
import Reminder from "./Reminder/Reminder";



class App extends Component {
  render() {
    return (


      <React.Fragment>
          <Reminder/>
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
