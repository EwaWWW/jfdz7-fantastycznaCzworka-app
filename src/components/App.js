import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import SearchView from "./Views/SearchView";
import MenuBar from './Common/MainMenu';
import UsersView from './Views/UsersView'

import WishesView from './Views/WishesView';


class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <React.Fragment>
            <MenuBar/>
        <Route exact path="/" component={SearchView}/>
        <Route path="/wishes" component={WishesView} />
        <Route path="/users" component={UsersView} />



      </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
