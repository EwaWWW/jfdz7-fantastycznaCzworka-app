import React, { Component } from 'react';
import Menu from './Menu';
import SearchView from "./SearchView/SearchView";
import WishesView from "./WishesView";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <SearchView/>
      </React.Fragment>
    );
  }
}

export default App;
