import React, { Component } from 'react';
import { Grid,Container } from 'semantic-ui-react'

import MenuBar from './Common/MainMenu/Menu';
import AddWish from './Views/WishesView/AddWish'



class App extends Component {
  render() {
    return (


      <React.Fragment>
          <Container fluid>
          <Grid>

              <Grid.Column>
                 <MenuBar/>
              </Grid.Column>

          </Grid>
          </Container>
                <AddWish />
      </React.Fragment>
    )
  }
}

export default App;
